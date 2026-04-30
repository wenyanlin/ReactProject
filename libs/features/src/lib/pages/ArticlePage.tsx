import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArticleHeader } from '../article/ArticleHeader';
import { useDispatch, useSelector } from 'react-redux';
import {
  RootState,
  loadArticle,
  AppDispatch,
  loadActiveCategory,
} from '@org/data-access';
import { useEffect } from 'react';

export function ArticlePage() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const { articleDetail, categories, isLoading, error } = useSelector(
    (state: RootState) => state.news,
  );

  const currentCategory = categories.find(
    (cat) => cat.id === articleDetail?.categoryId,
  );

  // 先上車後補票
  useEffect(() => {
    if (id) {
      dispatch(loadArticle(id));
    }
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
          <div
            className="p-4"
            dangerouslySetInnerHTML={{ __html: articleDetail?.content }}
          />
        </>
      ) : (
        <div className="p-8 text-center text-neutral-500">目前沒有相關新聞</div>
      )}
    </div>
  );
}
