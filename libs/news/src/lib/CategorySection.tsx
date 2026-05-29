import { useCategories } from './useNews';
import { useNavigate } from 'react-router-dom';
import { PageLoading } from '@org/shared-ui';
import { useParams } from 'react-router-dom';

export function CategorySection() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const categories = useCategories();

  if (categories === undefined) {
    return <PageLoading />;
  }

  if (!Array.isArray(categories) || categories.length === 0) {
    return (
      <div className="py-4 text-center text-slate-400 text-sm font-semibold bg-white border-b border-slate-100">
        沒有分類畫面喔！
      </div>
    );
  }

  return (
    <div className="w-full bg-white border-b border-slate-100 shrink-0 select-none py-3 px-2">
      <div className="flex items-center justify-between w-full">
        {categories.map((c) => {
          const isActive = categoryId === c.id;
          return (
            <button
              key={c.id}
              onClick={() => navigate(`/${c.id}`)}
              className={`flex-1 text-center text-[10px] sm:text-xs font-bold whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'text-slate-900 underline underline-offset-4 decoration-2'
                  : 'text-slate-400'
              }`}
            >
              {c.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
