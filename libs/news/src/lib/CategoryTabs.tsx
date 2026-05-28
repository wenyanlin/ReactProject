import { useCategories } from './useNews';
import { useNavigate } from 'react-router-dom';

type CategoryTabsProps = {
  categoryId: string;
};

export function CategoryTabs({ categoryId }: CategoryTabsProps) {
  const navigate = useNavigate();
  const categories = useCategories();

  if (!Array.isArray(categories) || categories.length === 0)
    return <div>沒有分類畫面喔！</div>;
  return (
    <div className="flex">
      {categories.map((c) => (
        <button
          className={`p-1 cursor-pointer transition-colors ${
            categoryId === c.id
              ? 'bg-neutral-800 text-white font-bold'
              : 'hover:bg-neutral-200 '
          }`}
          key={c.id}
          onClick={() => navigate(`/${c.id}`)}
        >
          {c.name}
        </button>
      ))}
    </div>
  );
}
