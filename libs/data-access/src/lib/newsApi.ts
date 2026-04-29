import { mockCategories, mockArticles, mockComments } from './newsMocks';
import { Article, Category, Comment } from './newsTypes';

const DELAY = 500;

// 取得所有分類
export const fetchCategories = (): Promise<Category[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockCategories);
    }, DELAY);
  });
};

// 根據分類 ID 取得新聞列表
export const fetchArticlesByCategory = (
  categoryId: string,
): Promise<Article[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredArticles = mockArticles.filter(
        (article) => article.categoryId === categoryId,
      );
      resolve(filteredArticles);
    }, DELAY);
  });
};

// 取得特定文章的留言
export const fetchCommentsByArticleId = (
  articleId: string,
): Promise<Comment[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredComments = mockComments.filter(
        (comment) => comment.articleId === articleId,
      );
      resolve(filteredComments);
    }, DELAY);
  });
};
