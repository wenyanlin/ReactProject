import { AuthProvider } from '@org/auth';
import { HomePage, MainLayout, NewsPage } from '@org/pages-react-project';
import '@org/shared-ui/lib/global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/:categoryId?" element={<HomePage />} />
            <Route path="/news/:newsId" element={<NewsPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </AuthProvider>
  );
}
