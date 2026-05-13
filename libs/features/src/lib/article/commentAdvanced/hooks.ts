import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { fetchComments, mockUser } from './mockData';
import type { AuthContextValue, Comment, User } from './types';

export const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export function useCommentLogic() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentUser] = useState<User | null>(mockUser);
  const inputRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<number>(2);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchComments();
        setComments(data);
      } catch (error) {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        } else {
          setErrorMessage('未知錯誤');
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    document.title = `留言數：${comments.length}`;
    return () => {
      document.title = `卸載的時候看要改什麼`;
    };
  }, [comments]);

  const authValue = useMemo(
    () => ({
      user: currentUser,
    }),
    [currentUser],
  );

  const stats = useMemo(() => {
    return {
      totalComments: comments.length,
      totalLikes: comments.reduce((sum, item) => sum + item.likeCount, 0),
      totalDislikes: comments.reduce((sum, item) => sum + item.dislikeCount, 0),
    };
  }, [comments]);

  const handleSubmit = useCallback(() => {
    if (!authValue || !authValue.user) {
      alert('請先登入');
      return;
    }

    if (!inputRef.current || inputRef.current.value.trim() === '') {
      alert('請輸入留言');
      return;
    }

    const newComment: Comment = {
      id: idRef.current + 1,
      authorId: authValue.user?.id,
      content: inputRef.current.value,
      likeCount: 0,
      dislikeCount: 0,
      userAction: 'none',
    };

    idRef.current += 1;

    setComments((prev) => [newComment, ...prev]);
    inputRef.current.value = '';
  }, [authValue]);

  const handleInteraction = useCallback(
    (id: number, action: 'liked' | 'disliked') => {
      setComments((prev) =>
        prev.map((comment) => {
          if (comment.id !== id) return comment;

          const { likeCount, dislikeCount, userAction } = comment;

          const baseLike = userAction === 'liked' ? likeCount - 1 : likeCount;
          const baseDisLike =
            userAction === 'disliked' ? dislikeCount - 1 : dislikeCount;

          const nextAction = userAction === action ? 'none' : action;

          return {
            ...comment,
            likeCount: nextAction === 'liked' ? baseLike + 1 : baseLike,
            dislikeCount:
              nextAction === 'disliked' ? baseDisLike + 1 : baseDisLike,
            userAction: nextAction,
          };
        }),
      );
    },
    [],
  );

  return {
    comments,
    inputRef,
    isLoading,
    errorMessage,
    authValue,
    stats,
    handleSubmit,
    handleInteraction,
  };
}
