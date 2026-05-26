import { Outlet } from 'react-router-dom';
import { AppHeader } from './AppHeader';

export function MainLayout() {
  return (
    <div className="bg-white max-w-screen-md mx-auto">
      <AppHeader />
      <Outlet />
    </div>
  );
}
