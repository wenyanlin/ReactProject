import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { MainLayout } from '@org/ui-layout';
import { HomePage } from './routes/HomePage';
import { ArticlePage } from './routes/HomePage';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/:categoryId?',
        element: <HomePage />,
      },
      {
        path: '/article/:articleId',
        element: <ArticlePage />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
