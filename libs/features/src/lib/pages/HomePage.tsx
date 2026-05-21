import { ArticleCard } from '../shared/ArticleCard.tsx';
import { CategoryTabs } from '../home/CategoryTabs';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Article,
  Category,
  fetchArticlesByCategory,
  fetchCategories,
} from '@org/data-access';
import { useEffect, useState } from 'react';

export function HomePage() {
  const { categoryId } = useParams();
  const navigation = useNavigate();
  const [categories, setCategories] = useState<Category[] | null>([]);
  const [isCategoriesLoading, setIsCategoriesLoading] =
    useState<boolean>(false);
  const [categoriesError, setCategoriesError] = useState<string | null>(null);
  const [articles, setArticlesState] = useState<Article[] | null>(null);
  const [isArticlesLoading, setIsArticlesLoading] = useState<boolean>(false);
  const [articlesError, setArticlesError] = useState<string | null>(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setIsCategoriesLoading(true);
        const rawCategories = await fetchCategories();
        if (!rawCategories || rawCategories.length === 0) {
          setCategoriesError('沒有分類資料');
          return;
        }
        setCategories(rawCategories);
      } catch (err) {
        console.log(err);
        setCategoriesError('載入分類失敗');
      } finally {
        setIsCategoriesLoading(false);
      }
    };
    loadCategories();
  }, []);

  useEffect(() => {
    if (!categoryId) {
      navigation(`/c1`, { replace: true });
      return;
    }
    const loadArticles = async () => {
      try {
        setIsArticlesLoading(true);
        const rawArticles = await fetchArticlesByCategory(categoryId || 'c1');
        if (!rawArticles || rawArticles.length === 0) {
          setArticlesError('沒有新聞列表');
          return;
        }
        setArticlesState(rawArticles);
      } catch (err) {
        console.log(err);
        setArticlesError('載入新聞列表失敗');
      } finally {
        setIsArticlesLoading(false);
      }
    };
    loadArticles();
  }, [navigation, categoryId]);

  return (
    <div className="flex flex-col min-h-screen">
      <CategoryTabs
        categories={categories}
        isLoading={isCategoriesLoading}
        error={categoriesError}
        activeCategoryId={categoryId}
      />
      <div className="flex-1">
        {articlesError && (
          <div className="p-4 text-red-500 text-center">{articlesError}</div>
        )}
        {isArticlesLoading ? (
          <div className="p-8 text-center text-neutral-500">新聞載入中...</div>
        ) : articles && articles.length > 0 ? (
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
