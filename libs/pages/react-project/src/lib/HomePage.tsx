import { NewsList, CategorySection } from '@org/news';


/**
 * HomePage 元件 - 首頁路由進入點
 * 
 * 主要功能：
 * 1. 作為容器拼接
 * @returns 
 */
export function HomePage() {
  return (
    <div className="flex flex-col gap-2">
      <CategorySection/>
      <NewsList/>
    </div>
  );
}
