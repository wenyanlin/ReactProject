import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type User = {
  id: number;
  name: string;
};

type Comment = {
  id: number;
  authorId: number;
  content: string;
  likeCount: number;
  dislikeCount: number;
};

const mockUser: User = {
  id: 1,
  name: '小明',
};

const mockComments: Comment[] = [
  {
    id: 1,
    authorId: 1,
    content: '這是第一則留言',
    likeCount: 2,
    dislikeCount: 0,
  },
  {
    id: 2,
    authorId: 2,
    content: '這是第二則留言',
    likeCount: 1,
    dislikeCount: 1,
  },
];

function fetchComments(): Promise<Comment[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockComments);
    }, 800);
  });
}

type AuthContextValue = {
  user: User | null;
};

const AuthContext = createContext<AuthContextValue | null>(null);

function useAuth() {
  return useContext(AuthContext);
}

export function CommentSectionAdvanced() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

  document.title = `留言數：${comments.length}`;

  const stats = useMemo(() => {
    return {
      totalComments: comments.length,
      totalLikes: comments.reduce((sum, item) => sum + item.likeCount, 0),
      totalDislikes: comments.reduce((sum, item) => sum + item.dislikeCount, 0),
    };
  }, []);

  const handleSubmit = useCallback(() => {
    if (!mockUser) {
      alert('請先登入');
      return;
    }

    if (inputValue.trim() === '') {
      alert('請輸入留言');
      return;
    }

    const newComment: Comment = {
      id: Date.now(),
      authorId: mockUser.id,
      content: inputValue,
      likeCount: 0,
      dislikeCount: 0,
    };

    setComments([newComment, ...comments]);
    setInputValue('');
  }, []);

  const handleLike = useCallback((id: number) => {
    setComments(
      comments.map((comment) =>
        comment.id === id
          ? { ...comment, likeCount: comment.likeCount + 1 }
          : comment,
      ),
    );
  }, []);

  const contextValue = {
    user: mockUser,
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <AuthContext.Provider value={contextValue}>
      <section>
        <h2>進階留言區</h2>

        <UserInfo />

        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        <CommentStats stats={stats} />

        <input
          value={inputValue}
          placeholder="請輸入留言"
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button onClick={handleSubmit}>送出</button>

        <CommentList comments={comments} onLike={handleLike} />
      </section>
    </AuthContext.Provider>
  );
}

function UserInfo() {
  const auth = useAuth();

  return <p>目前使用者：{auth.user.name}</p>;
}

type CommentStatsProps = {
  stats: {
    totalComments: number;
    totalLikes: number;
    totalDislikes: number;
  };
};

function CommentStats({ stats }: CommentStatsProps) {
  return (
    <div>
      <p>總留言數：{stats.totalComments}</p>
      <p>總愛心數：{stats.totalLikes}</p>
      <p>總倒讚數：{stats.totalDislikes}</p>
    </div>
  );
}

type CommentListProps = {
  comments: Comment[];
  onLike: (id: number) => void;
};

function CommentList({ comments, onLike }: CommentListProps) {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <p>{comment.content}</p>
          <button onClick={() => onLike(comment.id)}>
            愛心 {comment.likeCount}
          </button>
        </li>
      ))}
    </ul>
  );
}
