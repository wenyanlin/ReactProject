import { useParams } from 'react-router-dom';
import { CommentList } from '@org/comment';
import { useNewsDetail } from '@org/news';

/**
 * TODO: 元件尚未做完，思考是否須往下拆，讓 NewsPage 專注在邏輯
 */
export function NewsPage() {
  const { newsId } = useParams<{ newsId: string }>();
  const { title, publisher, imageUrl, content } = useNewsDetail(newsId);

  return (
    <div>
      <article>
        <h1>{title}</h1>
        <div>{publisher}</div>
        <div>
          <img src={imageUrl} alt={title} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </article>
      <CommentList newsId={newsId} />
    </div>
  );
}
