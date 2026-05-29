import { useState, useEffect } from 'react';
import { Category, NewsDetail, NewsItem } from './NewsTypes';
import { fetchCategories, fetchNewsList, fetchNewsDetail } from './newsService';

export function useCategories(): Category[] | undefined {
  const [categories, setCategories] = useState<Category[] | undefined>(undefined);

  useEffect(() => {
    let active = true;
    fetchCategories().then((res) => {
      if (active) {
        setCategories(res || []);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  return categories;
}

export function useNewsList(categoryId: string): NewsItem[] | undefined {
  const [news, setNews] = useState<NewsItem[] | undefined>(undefined);

  useEffect(() => {
    let active = true;
    setNews(undefined); // Reset to loading state on categoryId change
    fetchNewsList(categoryId).then((res) => {
      if (active) {
        setNews(res);
      }
    });
    return () => {
      active = false;
    };
  }, [categoryId]);

  return news;
}

export function useNewsDetail(newsId: string): NewsDetail | null | undefined {
  const [detail, setDetail] = useState<NewsDetail | null | undefined>(undefined);

  useEffect(() => {
    let active = true;
    setDetail(undefined); // Reset to loading state on newsId change
    fetchNewsDetail(newsId).then((res) => {
      if (active) {
        setDetail(res || null);
      }
    });
    return () => {
      active = false;
    };
  }, [newsId]);

  return detail;
}
