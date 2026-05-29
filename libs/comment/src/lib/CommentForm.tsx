import { CommentInput, CommentInputHandle } from './CommentInput';
import { useRef } from 'react';
import { useAuth } from '@org/auth';
import { useParams } from 'react-router-dom';
import { Comment } from './CommentTypes';

type CommentFormProps = {
  onAdd: (content: Comment) => void;
};

export function CommentForm({ onAdd }: CommentFormProps) {
  const inputRef = useRef<CommentInputHandle>(null);
  const { user, logout } = useAuth();
  const { newsId } = useParams();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const content = inputRef.current?.getValue() || '';

    if (!content.trim() || !newsId) return;

    if (!user) {
      logout();
      return;
    }

    const newComment: Comment = {
      id: crypto.randomUUID(),
      newsId: newsId,
      author: user.name,
      publishTime: new Date().toLocaleDateString('zh-TW'),
      content: content,
      likes: 0,
      dislikes: 0,
    };

    onAdd(newComment);

    inputRef.current?.clear();
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 mb-6">
      <CommentInput ref={inputRef} />
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-1.5 border text-xs font-bold tracking-widest transition-colors duration-200 select-none cursor-pointer border-slate-300 text-slate-700 hover:border-slate-400 hover:text-slate-900"
        >
          送出
        </button>
      </div>
    </form>
  );
}
