import { Outlet } from 'react-router-dom';
import { AppHeader } from '@org/ui-layout';
import { AuthProvider } from '@org/auth-data-access';
// import {
//   fetchCategories,
//   fetchArticlesByCategory,
//   fetchCommentsByArticleId,
// } from '../services/api';

export default function App() {
  return (
    <AuthProvider>
      <main className="bg-white max-w-screen-md mx-auto">
        <AppHeader />
        <Outlet />
      </main>
    </AuthProvider>
  );
}
