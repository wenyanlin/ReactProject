import { createBrowserRouter } from 'react-router-dom';
import App from '../app';
import { HomePage, ArticlePage } from '@org/features';

export function createAppRoutes(queryClient: any) {
  return createBrowserRouter([
    {
      path: '/',
      element: <App />,
      /**
       * TODO: 增加錯誤路由跳轉頁面元件
       * */
      // errorElement: <div>Not Found</div>,
      children: [
        // TODO: 這裡的路由配置改從 features 內
        // {
        //   path: '/:categoryId?',
        //   element: <HomePage />,
        // },
        // {
        //   path: '/article/:id',
        //   element: <ArticlePage />,
        // },
      ],
    },
  ]);
}
