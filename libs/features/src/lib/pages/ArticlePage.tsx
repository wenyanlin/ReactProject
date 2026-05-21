import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArticleHeader } from '../article/ArticleHeader';
import { useDispatch, useSelector } from 'react-redux';
import {
  RootState,
  loadArticle,
  AppDispatch,
  clearArticleDetail,
} from '@org/data-access';
import { useEffect, useState } from 'react';
import { ArticleTags } from '../article/ArticleTags';
import { CommentSection } from '../article/CommentSection';
import { CommentSectionAdvanced } from '../article/CommentSectionAdvanced';

export function ArticlePage() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const { articleDetail, categories, isLoading, error } = useSelector(
    (state: RootState) => state.news,
  );

  const currentCategory = categories.find(
    (cat) => cat.id === articleDetail?.categoryId,
  );

  useEffect(() => {
    if (id) {
      dispatch(loadArticle(id));
    }

    return () => {
      dispatch(clearArticleDetail());
    };
  }, [dispatch, id]);

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
      {error && <div className="p-4 text-red-500 text-center">{error}</div>}
      {isLoading ? (
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
          <CommentSectionAdvanced />
        </>
      ) : (
        <div className="p-8 text-center text-neutral-500">目前沒有相關新聞</div>
      )}
    </div>
  );
}
