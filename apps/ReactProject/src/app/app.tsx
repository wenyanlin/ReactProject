import { Outlet } from 'react-router-dom';
// import {
//   fetchCategories,
//   fetchArticlesByCategory,
//   fetchCommentsByArticleId,
// } from '../services/api';

export default function App() {
  return (
    <div className="bg-neutral-100">
      {/* <header></header> */}
      <main className="bg-white max-w-screen-md mx-auto">
        <Outlet />
      </main>
      {/* <footer></footer> */}
    </div>
  );
}
