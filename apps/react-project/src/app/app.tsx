import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, NewsPage } from '@org/pages-react-project';
import { AuthProvider } from '@org/auth';

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/:categoryId?" element={<HomePage />} />
          <Route path="/news/:newsId" element={<NewsPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
