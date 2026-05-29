import { AppHeader } from './AppHeader';
import { Outlet } from 'react-router-dom';

/**
 *
 * @param param0
 * @returns
 */
export function MainLayout() {
  return (
    <div className="max-w-3xl mx-auto bg-white flex flex-col min-h-screen">
      <AppHeader title="React"></AppHeader>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
