import { memo } from 'react';
import type { Comment } from './types';

type CommentItemProps = {
  comment: Comment;
  onInteraction: (id: number, action: 'liked' | 'disliked') => void;
};

export const CommentItem = memo(function CommentItem({
  comment,
  onInteraction,
}: CommentItemProps) {
  return (
    <li>
      <p>{comment.content}</p>
      <button
        onClick={() => onInteraction(comment.id, 'liked')}
        style={{
          color: comment.userAction === 'liked' ? 'red' : 'black',
        }}
      >
        愛心 {comment.likeCount}
      </button>
      <button
        onClick={() => onInteraction(comment.id, 'disliked')}
        style={{
          color: comment.userAction === 'disliked' ? 'red' : 'black',
        }}
      >
        倒讚 {comment.dislikeCount}
      </button>
    </li>
  );
});
