import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch, initData } from '@org/data-access';
import { ArticleCard } from '../shared/ArticleCard.tsx';
import { CategoryTabs } from '../home/CategoryTabs';

export function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const { articles, isLoading, error } = useSelector(
    (state: RootState) => state.news,
  );

  useEffect(() => {
    dispatch(initData());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <CategoryTabs />
      <div className="flex-1">
        {error && <div className="p-4 text-red-500 text-center">{error}</div>}
        {isLoading ? (
          <div className="p-8 text-center text-neutral-500">新聞載入中...</div>
        ) : articles.length > 0 ? (
          <div className="divide-y divide-neutral-200">
            {articles.map((article) => (
              <ArticleCard key={article.id} data={article} />
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-neutral-500">
            目前沒有相關新聞
          </div>
        )}
      </div>
    </div>
  );
}
