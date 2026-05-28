import { Link } from 'react-router-dom';
import { NewsCard } from './NewsCard';
import { useNewsList } from './useNews';

type NewsListProps = {
  categoryId: string;
};

/**
 * ?: 這算什麼樣的元件
 */
export function NewsList({ categoryId }: NewsListProps) {
  const news = useNewsList(categoryId);

  if (!Array.isArray(news) || news.length === 0)
    return <div>暫時沒有文章唷！</div>;

  return (
    <div className="flex flex-col gap-2">
      {news.map((n) => (
        <Link to={`/news/${n.id}`} key={n.id} className="flex flex-col gap-2">
          <NewsCard newsItem={n} />
        </Link>
      ))}
    </div>
  );
}
