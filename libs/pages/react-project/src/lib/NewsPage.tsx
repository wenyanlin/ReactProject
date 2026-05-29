import { CommentSection } from '@org/comment';
import { NewsArticle } from '@org/news';

export function NewsPage() {
  return (
    <div className="bg-white min-h-screen">
      <NewsArticle/>
      <CommentSection/>
    </div>
  );
}
