import { useState, useEffect } from 'react';
import type { Comment } from './CommentTypes';
import { fetchComments } from './commentService';

export interface UseCommentsReturn {
  comments: Comment[] | undefined;
  isLoading: boolean;
  error: string | null;
  addComment: (comment: Comment) => void;
  deleteComment: (commentId: string) => void;
  likeComment: (commentId: string, isLike: boolean) => void;
  dislikeComment: (commentId: string, isDislike: boolean) => void;
}

export function useComments(newsId: string): UseCommentsReturn {
  const [comments, setComments] = useState<Comment[] | undefined>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    setIsLoading(true);

    const loadData = async () => {
      try {
        const res = await fetchComments(newsId);
        if (active) {
          setComments(res);
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('發生未知的錯誤');
        }
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    };

    loadData();

    return () => {
      active = false;
      setComments([]);
    };
  }, [newsId]);

  const addComment = (comment: Comment) => {
    setComments((prev) => (prev ? [comment, ...prev] : [comment]));
  };

  const deleteComment = (commentId: string) => {
    setComments((prev) => {
      if (!prev) return prev;
      const isRoot = prev.some((c) => c.id === commentId);
      if (isRoot) {
        return prev.filter((c) => c.id !== commentId);
      } else {
        return prev.map((c) => {
          if (c.replies) {
            return {
              ...c,
              replies: c.replies.filter((r) => r.id !== commentId),
            };
          }
          return c;
        });
      }
    });
  };

  const likeComment = (commentId: string, isLike: boolean) => {
    setComments((prev) =>
      prev?.map((c) =>
        c.id === commentId
          ? { ...c, likes: isLike ? c.likes + 1 : c.likes - 1 }
          : c,
      ),
    );
  };

  const dislikeComment = (commentId: string, isDislike: boolean) => {
    setComments((prev) =>
      prev?.map((c) =>
        c.id === commentId
          ? { ...c, dislikes: isDislike ? c.dislikes + 1 : c.dislikes - 1 }
          : c,
      ),
    );
  };

  return {
    comments,
    isLoading,
    error,
    addComment,
    deleteComment,
    likeComment,
    dislikeComment,
  };
}
