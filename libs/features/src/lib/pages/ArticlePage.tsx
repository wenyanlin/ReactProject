import { Link, useParams } from 'react-router-dom';
import { ArticleHeader } from '../article/ArticleHeader';

import { useEffect, useState } from 'react';
import { ArticleTags } from '../article/ArticleTags';
import { CommentSection } from '../article/CommentSection';
import {
  ArticleDetail,
  Category,
  fetchArticleById,
  fetchCategories,
} from '@org/data-access';

export function ArticlePage() {
  const { id } = useParams();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isCategoriesLoading, setIsCategoriesLoading] =
    useState<boolean>(false);
  const [categoriesError, setCategoriesError] = useState<string | null>(null);
  const [articleDetail, setArticleDetail] = useState<ArticleDetail | null>(
    null,
  );
  const [isArticleDetailLoading, setIsArticleDetailLoading] =
    useState<boolean>(false);
  const [articleDetailError, setArticleDetailError] = useState<string | null>(
    null,
  );

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
    const loadArticleDetail = async () => {
      try {
        setIsArticleDetailLoading(true);
        const rawArticleDetail = await fetchArticleById(id || '');
        if (!rawArticleDetail) {
          setArticleDetailError('沒有新聞內容');
          return;
        }
        setArticleDetail(rawArticleDetail);
      } catch (err) {
        console.log(err);
        setArticleDetailError('載入新聞內容失敗');
      } finally {
        setIsArticleDetailLoading(false);
      }
    };
    loadArticleDetail();
  }, [id]);

  const currentCategory = categories.find(
    (cat) => cat.id === articleDetail?.categoryId,
  );

  return (
    <div className="min-h-screen ">
      <nav className="p-2 flex items-center">
        <Link
          to="/"
          className="m-2 block w-6 h-6 bg-neutral-200 aspect-square rounded-lg"
        ></Link>
        {currentCategory && (
          <Link to={`/${currentCategory.id}`} className="text-sm text-gray-500">
            {currentCategory.name}
          </Link>
        )}
      </nav>
      {articleDetailError && (
        <div className="p-4 text-red-500 text-center">{articleDetailError}</div>
      )}
      {isArticleDetailLoading ? (
        <div className="p-8 text-center text-neutral-500">新聞載入中...</div>
      ) : articleDetail ? (
        <>
          <ArticleHeader data={articleDetail} />
          {articleDetail.imageUrl && (
            <div className="w-full h-96 bg-neutral-100 overflow-hidden">
              <img
                src={articleDetail.imageUrl}
                alt={articleDetail.title}
                onLoad={() => setIsImageLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-300 ease-in-out ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
          )}
          <div
            className="p-4"
            dangerouslySetInnerHTML={{ __html: articleDetail?.content }}
          />
          <ArticleTags tags={articleDetail?.tags || []} />
          <CommentSection />
        </>
      ) : (
        <div className="p-8 text-center text-neutral-500">目前沒有相關新聞</div>
      )}
    </div>
  );
}
