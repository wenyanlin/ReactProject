import { useNavigate, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Article,
  Category,
  fetchArticlesByCategory,
  fetchCategories,
} from '@org/data-access';
// import styles from './feature-list.module.css';
// className={styles['container']}

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



interface CatregoryTabsProps {
  categories: Category[] | null;
  isLoading: boolean;
  error: string | null;
  activeCategoryId?: string;
}

export function CategoryTabs({
  categories,
  isLoading,
  error,
  activeCategoryId,
}: CatregoryTabsProps) {
  const navigate = useNavigate();

  return (
    <div className="flex overflow-x-auto no-scrollbar border-b border-neutral-200 bg-white sticky top-0 z-10">
      <div className="flex justify-between">
        {categories?.map((category) => (
          <TabItem
            key={category.id}
            label={category.name}
            isActive={category.id === activeCategoryId}
            onClick={() => navigate(`/${category.id}`)}
          />
        ))}
      </div>
    </div>
  );
}

interface ArticleCardProps {
  data: Article;
}

export function ArticleCard({ data }: ArticleCardProps) {
  const { id, title, publisher, imageUrl } = data;

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Link to={`/article/${id}`} className="block group">
      <article className="grid grid-cols-8 gap-4 p-4 border-b border-gray-100 group-hover:bg-gray-50 transition-colors cursor-pointer">
        {/* left section */}
        <div className="col-span-2 aspect-video overflow-hidden rounded-lg bg-neutral-100">
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            srcSet={`https://picsum.photos/384/216?random=${id} 400w`}
            className={`
              w-full h-full object-cover transition-opacity duration-300 ease-in-out
              ${isLoaded ? 'opacity-100' : 'opacity-0'}
            `}
          />
        </div>
        {/* right section */}
        <div className="col-span-6">
          <h3 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">
            {title}
          </h3>
          <div className="text-sm text-neutral-400 mt-1">{publisher}</div>
        </div>
      </article>
    </Link>
  );
}

interface TabItemProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function TabItem({ label, isActive, onClick }: TabItemProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium whitespace-nowrap border-b-2 cursor-pointer transition-colors duration-200 ${
        isActive
          ? 'text-primary border-primary'
          : 'text-neutral-500 border-transparent hover:text-neutral-700'
      }`}
    >
      {label}
    </button>
  );
}
