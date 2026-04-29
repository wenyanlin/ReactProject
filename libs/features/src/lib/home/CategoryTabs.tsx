import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch, setActiveCategory } from '@org/data-access';
import { TabItem } from './TabItem';

export function CategoryTabs() {
  const dispatch = useDispatch<AppDispatch>();
  const { categories, activeCategoryId } = useSelector(
    (state: RootState) => state.news
  );

  return (
    <div className="flex overflow-x-auto no-scrollbar border-b border-neutral-200 bg-white sticky top-0 z-10">
      <div className="flex justify-between">
        {categories.map((category) => (
          <TabItem
            key={category.id}
            label={category.name}
            isActive={category.id === activeCategoryId}
            onClick={() => dispatch(setActiveCategory(category.id))}
          />
        ))}
      </div>
    </div>
  );
}
