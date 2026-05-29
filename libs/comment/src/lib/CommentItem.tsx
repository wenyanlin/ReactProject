import { useState } from 'react';
import { formatDate } from '@org/shared-utils';
import { Comment } from './CommentTypes';

type CommentItemProps = {
  comment: Comment;
  onLike: (id: string, isLike: boolean) => void;
  onDislike: (id: string, isDislike: boolean) => void;
  onDelete: (commentId: string) => void;
};

export function CommentItem({
  comment,
  onLike,
  onDislike,
  onDelete,
}: CommentItemProps) {
  const [isLiked, setLiked] = useState<boolean>(false);
  const [isDisliked, setDisliked] = useState<boolean>(false);

  const handleLike = () => {
    if (isLiked) {
      setLiked(false);
      onLike(comment.id, false);
    } else {
      setLiked(true);
      onLike(comment.id, true);
      if (isDisliked) {
        setDisliked(false);
        onDislike(comment.id, false);
      }
    }
  };

  const handleDisLike = () => {
    if (isDisliked) {
      setDisliked(false);
      onDislike(comment.id, false);
    } else {
      setDisliked(true);
      onDislike(comment.id, true);
      if (isLiked) {
        setLiked(false);
        onLike(comment.id, false);
      }
    }
  };

  return (
    <div
      className="py-4 border-b border-slate-100 last:border-b-0"
    >
      <div className="flex flex-col">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-sm font-bold text-slate-700 truncate">
            {comment.author}
          </span>
          <span className="text-[10px] text-slate-400 font-medium">
            {formatDate(comment.publishTime)}
          </span>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed font-normal whitespace-pre-wrap wrap-break-word">
          {comment.content}
        </p>

        <div className="flex items-center gap-3 mt-2 text-xs font-bold text-slate-400 select-none">
          <button
            onClick={handleLike}
            className={`transition-colors duration-200 cursor-pointer ${
              isLiked ? 'text-emerald-600' : ''
            }`}
          >
            讚 {comment.likes}
          </button>
          <button
            onClick={handleDisLike}
            className={`transition-colors duration-200 cursor-pointer ${
              isDisliked ? 'text-rose-600' : ''
            }`}
          >
            噓 {comment.dislikes}
          </button>
          <span>•</span>
          <button
            onClick={() => onDelete(comment.id)}
            className="hover:text-rose-600 cursor-pointer"
          >
            刪除
          </button>
        </div>
      </div>
    </div>
  );
}