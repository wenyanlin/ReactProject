export interface Comment {
  id: number;
  content: string;
  likeCount: number;
  dislikeCount: number;
  userAction: 'like' | 'dislike' | null;
}

interface CommentItemProps {
  comment: Comment;
  onInteraction: (id: number, action: 'like' | 'dislike') => void;
  onDelete: (id: number) => void;
}

export function CommentItem({
  comment,
  onInteraction,
  onDelete,
}: CommentItemProps) {
  return (
    <li className="p-3 border border-neutral-200 relative">
      <div className="flex justify-between items-start mb-2">
        <p className="text-neutral-800 flex-1 whitespace-pre-wrap">{comment.content}</p>
        <button
          className="text-neutral-400 hover:text-neutral-600 text-sm ml-2 duration-150 transition-colors cursor-pointer"
          onClick={() => onDelete(comment.id)}
        >
          ×
        </button>
      </div>
      <div className="flex justify-end gap-2">
        {/* Like Button */}
        <button
          onClick={() => onInteraction(comment.id, 'like')}
          className={`
            flex items-center gap-2 px-3 py-1 border rounded-md transition-all duration-150 cursor-pointer 
            ${
              comment.userAction === 'like'
                ? 'border-green-500 bg-green-50 text-green-600'
                : 'border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300'
            }
          `}
        >
          <span className="text-xs">▲</span>
          <span className="text-sm font-medium">{comment.likeCount}</span>
        </button>

        {/* Dislike Button */}
        <button
          onClick={() => onInteraction(comment.id, 'dislike')}
          className={`
            flex items-center gap-2 px-3 py-1 border rounded-md transition-all duration-150 cursor-pointer 
            ${
              comment.userAction === 'dislike'
                ? 'border-red-500 bg-red-50 text-red-600'
                : 'border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300'
            }
          `}
        >
          <span className="text-xs">▼</span>
          <span className="text-sm font-medium">{comment.dislikeCount}</span>
        </button>
      </div>
    </li>
  );
}
