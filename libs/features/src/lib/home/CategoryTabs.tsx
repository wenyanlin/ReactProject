import { Category } from '@org/data-access';
import { TabItem } from './TabItem';
import { useNavigate } from 'react-router-dom';

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
