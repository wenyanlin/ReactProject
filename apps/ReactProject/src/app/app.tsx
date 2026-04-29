import { Outlet } from 'react-router-dom';
// import {
//   fetchCategories,
//   fetchArticlesByCategory,
//   fetchCommentsByArticleId,
// } from '../services/api';

export default function App() {
  return (
    <>
      {/* <header></header> */}
      <main className="max-w-screen-md mx-auto">
        <Outlet />
      </main>
      {/* <footer></footer> */}
    </>
  );
}
