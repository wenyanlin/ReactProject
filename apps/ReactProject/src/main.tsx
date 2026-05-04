import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { loadCategories, store } from '@org/data-access';

import './styles.css';
import App from './app/app';
import { HomePage, ArticlePage } from '@org/features';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: async () => {
      await store.dispatch(loadCategories());
      return null;
    },
    children: [
      {
        path: '/:categoryId?',
        element: <HomePage />,
      },
      {
        path: '/article/:id',
        element: <ArticlePage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
