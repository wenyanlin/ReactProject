import type { Category, NewsDetail, NewsItem } from './NewsTypes';
import { NEWS, NEWSDETAILS, CATEGORIES } from './news.mock';

export async function fetchCategories(): Promise<Category[] | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 600));
  return CATEGORIES;
}

export async function fetchNewsList(categoryId: string): Promise<NewsItem[]> {
  await new Promise((resolve) => setTimeout(resolve, 600));
  const news = NEWS.filter((n) => n.categoryId === categoryId);
  return news;
}

export async function fetchNewsDetail(
  newsId: string,
): Promise<NewsDetail | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 600));
  const news = NEWSDETAILS.find((n) => n.id === newsId);
  return news;
}

