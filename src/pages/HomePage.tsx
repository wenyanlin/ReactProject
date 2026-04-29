import { useEffect } from 'react';
import { useNewsStore } from '../store/useNewsStore';
import ArticleCard from '../components/shared/ArticleCard';

export default function HomePage() {
  const { articles, isLoading, error, initData } = useNewsStore();

  useEffect(() => {
    initData();
  }, [initData]);

  return (
    <div>
      {error && <div className="p-4 text-red-500 text-center">{error}</div>}
      {isLoading ? (
        <div className="p-8 text-center text-neutral-500">新聞載入中...</div>
      ) : (
        articles.map((article) => (
          <ArticleCard key={article.id} data={article} />
        ))
      )}
    </div>
  );
}
