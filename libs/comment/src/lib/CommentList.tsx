import type { Comment } from './CommentTypes';
import { CommentItem } from './CommentItem';

type CommentListProps = {
  comments: Comment[];
  onDelete: (commentId: string) => void;
  onLike: (id: string, isLike: boolean) => void;
  onDislike: (id: string, isDislike: boolean) => void;
};

export function CommentList({
  comments,
  onDelete,
  onLike,
  onDislike,
}: CommentListProps) {
  return (
    <div className="divide-y divide-slate-100/50">
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          onLike={onLike}
          onDislike={onDislike}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
