import { Link } from 'react-router-dom';
import { NewsCard } from './NewsCard';
import { useNewsList } from './useNews';
import { PageLoading } from '@org/shared-ui';
import { useParams } from 'react-router-dom';

export function NewsList() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const news = useNewsList(categoryId || '');

  if (news === undefined) {
    return <PageLoading />;
  }

  if (!Array.isArray(news) || news.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-white shrink-0 select-none text-xs font-semibold text-slate-400">
        該分類目前沒有任何新聞文章喔！
      </div>
    );
  }

  return (
    <div className="bg-white flex flex-col divide-y divide-slate-100 shrink-0">
      {news.map((n) => (
        <Link to={`/news/${n.id}`} key={n.id} className="block">
          <NewsCard newsItem={n} />
        </Link>
      ))}
    </div>
  );
}
