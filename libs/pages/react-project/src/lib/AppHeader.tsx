import { ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNewsDetail, useCategories } from '@org/news';
import { useAuth } from '@org/auth';

interface AppHeaderProps {
  title: ReactNode;
}

export function AppHeader({ title }: AppHeaderProps) {
  return (
    <header className="w-full h-14 bg-white flex justify-between items-center px-5 border-b border-slate-100 shrink-0 select-none">
      <TitleSection title={title} />
      <UserSection />
    </header>
  );
}

interface TitleSectionProps {
  title: ReactNode;
}

function TitleSection({ title }: TitleSectionProps) {
  const categories = useCategories();
  const { newsId } = useParams();

  const newsDetail = useNewsDetail(newsId || '');
  const currentCategory =
    newsDetail && categories
      ? categories.find((c) => c.id === newsDetail.categoryId)
      : null;

  const displayTitle = currentCategory ? (
    <Link to={`/${currentCategory.id}`}>{currentCategory.name}</Link>
  ) : (
    <Link to="/">{title}</Link>
  );
  return (
    <div className="flex items-center">
      <span className="text-base font-bold text-slate-800 tracking-wider">
        {displayTitle}
      </span>
    </div>
  );
}

function UserSection() {
  const { user, logout } = useAuth();
  const textStyle = 'text-sm font-bold text-slate-500';

  if (user) {
    return (
      <div className="flex items-center gap-3">
        <span className={textStyle}>{user.name}</span>
        <button
          onClick={logout}
          className={`${textStyle} cursor-pointer select-none`}
        >
          登出
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <Link to="/login" className={`${textStyle} cursor-pointer select-none`}>
        登入
      </Link>
    </div>
  );
}
