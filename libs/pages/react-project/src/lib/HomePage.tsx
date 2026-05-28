import { NewsList, CategoryTabs } from '@org/news';
import { useParams } from 'react-router-dom';

export function HomePage() {
  const { categoryId } = useParams<{ categoryId: string }>();

  return (
    <div className="flex flex-col gap-2">
      <CategoryTabs categoryId={categoryId} />
      <NewsList categoryId={categoryId} />
    </div>
  );
}
