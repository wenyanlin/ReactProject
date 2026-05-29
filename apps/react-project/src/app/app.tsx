import { AuthProvider, AuthGuard } from '@org/auth';
import {
  HomePage,
  MainLayout,
  NewsPage,
  LoginPage,
} from '@org/pages-react-project';
import '@org/shared-ui/lib/global.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

/**
 * 將 Layout 提升到路由定義層，讓 Layout 成為常駐節點。這樣切換路由時，React 只會替換 <Outlet /> 裡的內容，外層的 MainLayout 不會重新渲染。
 */
function Views() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/:categoryId?" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<AuthGuard />}>
          <Route path="/news/:newsId" element={<NewsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Views />
      </BrowserRouter>
    </AuthProvider>
  );
}
