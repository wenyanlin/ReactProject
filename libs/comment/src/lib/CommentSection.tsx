import { useComments } from './useComments';
import { PageLoading } from '@org/shared-ui';
import { useAuth } from '@org/auth';
import { useParams } from 'react-router-dom';
import { CommentForm } from './CommentForm';
import { CommentItem } from './CommentItem';
import { CommentList } from './CommentList';

export function CommentSection() {
  const { newsId } = useParams<{ newsId: string }>();
  const {
    comments,
    isLoading,
    error,
    addComment,
    deleteComment,
    likeComment,
    dislikeComment,
  } = useComments(newsId || '');
  const { user } = useAuth();

  if (isLoading) return <PageLoading />;
  if (error) return <div>{error}</div>;
  if (!comments) return <div>資料異常</div>;
  if (comments.length === 0) {
    return (
      <div className="text-center py-8 px-4 text-xs font-semibold text-slate-400">
        還沒有留言，快來分享你的想法吧！
      </div>
    );
  }

  return (
    <div className="p-4 border-t border-slate-100 bg-white">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
        <h2 className="text-base font-bold text-slate-800 tracking-wider">
          討論區
        </h2>
        <span className="text-xs font-bold text-slate-400">
          {comments.length} 則留言
        </span>
      </div>

      {user && <CommentForm onAdd={addComment} />}

      <CommentList comments={comments} onDelete={deleteComment} onLike={likeComment} onDislike={dislikeComment} />
    </div>
  );
}
