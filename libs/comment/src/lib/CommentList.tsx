import { useComments } from './useComments';

type CommentListProps = {
  newsId: string;
};

/**
 * TODO: 元件需增加互動功能，尚未做完
 */
export function CommentList({ newsId }: CommentListProps) {
  const comments = useComments(newsId);

  return (
    <div>
      {comments.map((c) => (
        <div key={c.id}>
          <div>{c.author}</div>
          <div>{c.content}</div>
        </div>
      ))}
    </div>
  );
}
