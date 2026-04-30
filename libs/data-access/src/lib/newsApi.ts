import {
  mockCategories,
  mockArticles,
  mockComments,
  mockArticleDetails,
} from './newsMocks';
import { Article, Category, Comment, ArticleDetail } from './newsTypes';

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

export const fetchArticleById = (
  articleId: string,
): Promise<ArticleDetail | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const detail = mockArticleDetails.find((a) => a.id === articleId);
      resolve(detail);
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
