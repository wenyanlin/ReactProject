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

export function useNewsList(): NewsItem[] {
  return mockNews;
}

export function useNewsDetail(id: string | undefined): NewsDetail | undefined {
  return mockNewsDetails.find((n) => n.id === id);
}