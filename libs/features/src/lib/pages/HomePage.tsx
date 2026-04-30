import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, loadActiveCategory, RootState } from '@org/data-access';
import { ArticleCard } from '../shared/ArticleCard.tsx';
import { CategoryTabs } from '../home/CategoryTabs';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export function HomePage() {
  const { categoryId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { articles, categories, isLoading, error } = useSelector(
    (state: RootState) => state.news,
  );

  useEffect(() => {
    if (categoryId) {
      dispatch(loadActiveCategory(categoryId));
    } else if (categories.length > 0) {
      dispatch(loadActiveCategory(categories[0].id));
    }
  }, [dispatch, categoryId, categories]);

  return (
    <div className="flex flex-col min-h-screen">
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
