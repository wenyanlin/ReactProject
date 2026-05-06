import { Comment, CommentItem } from './CommentItem';

interface CommentListProps {
  comments: Comment[];
  onInteraction: (id: number, action: 'like' | 'dislike') => void;
  onDelete: (id: number) => void;
}

export function CommentList({
  comments,
  onInteraction,
  onDelete,
}: CommentListProps) {
  return (
    <ul className="p-4 *:mb-4 *:last:mb-0">
      {comments.length === 0
        ? '目前沒有留言'
        : comments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              onInteraction={onInteraction}
              onDelete={onDelete}
            />
          ))}
    </ul>
  );
}
