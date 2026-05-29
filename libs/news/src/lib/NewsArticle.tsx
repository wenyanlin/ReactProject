import { useNewsDetail } from './useNews';
import { formatDate } from '@org/shared-utils';
import { useParams, Navigate } from 'react-router-dom';
import { PageLoading } from '@org/shared-ui';

export function NewsArticle() {
  const { newsId } = useParams<{ newsId: string }>();
  const newsDetail = useNewsDetail(newsId || '');

  if (newsDetail === null) {
    return <Navigate to="/" replace />;
  }

  if (newsDetail === undefined) {
    return <PageLoading />;
  }
  return (
    <div className="bg-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .article-body p {
              margin-bottom: 1.5rem;
              line-height: 1.75;
            }
            .article-body p:last-child {
              margin-bottom: 0;
            }
            .article-body strong {
              color: #1e293b;
              font-weight: 600;
            }
          `,
        }}
      />

      <div className="p-4 border-b border-slate-100">
        <h1 className="text-xl font-bold text-slate-800 leading-snug mb-3">
          {newsDetail.title}
        </h1>

        <div className="flex flex-col">
          <span className="text-xs font-bold text-slate-500">
            {newsDetail.publisher}
          </span>
          <div className="flex gap-2.5 mt-1 text-xs text-slate-400 font-medium">
            <span>上傳：{formatDate(newsDetail.publishTime)}</span>
            {newsDetail.updateTime && (
              <>
                <span>•</span>
                <span>更新：{formatDate(newsDetail.updateTime)}</span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="px-4 py-5 bg-white">
        {newsDetail.imageUrl && (
          <img
            src={newsDetail.imageUrl}
            alt={newsDetail.title}
            className="w-full h-auto object-cover mb-5"
          />
        )}

        <div
          className="text-slate-600 text-base leading-relaxed article-body"
          dangerouslySetInnerHTML={{ __html: newsDetail.content }}
        />

        {newsDetail.tags && newsDetail.tags.length > 0 && (
          <div className="flex flex-wrap gap-2.5 mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400 font-bold">
            {newsDetail.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
