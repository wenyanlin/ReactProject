import {
  Category,
  mockCategories,
  mockNews,
  mockNewsDetails,
  NewsDetail,
  NewsItem,
} from './news.mock';

export function useCategories(): Category[] {
  return mockCategories;
}

export function useNewsList(categoryId: string): NewsItem[] {
  return mockNews.filter((n) => n.categoryId === categoryId);
}

export function useNewsDetail(newsId: string): NewsDetail | undefined {
  return mockNewsDetails.find((n) => n.id === newsId);
}
