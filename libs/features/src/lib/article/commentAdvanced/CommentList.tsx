import { CommentItem } from './CommentItem';
import type { Comment } from './types';

type CommentListProps = {
  comments: Comment[];
  onInteraction: (id: number, action: 'liked' | 'disliked') => void;
};

export function CommentList({ comments, onInteraction }: CommentListProps) {
  return (
    <ul>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          onInteraction={onInteraction}
        />
      ))}
    </ul>
  );
}
