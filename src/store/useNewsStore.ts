import { create } from 'zustand';
import { Article, Category } from '../mock/newsData';
import { fetchArticlesByCategory, fetchCategories } from '../services/api';

interface NewsState {
  // State
  categories: Category[];
  activeCategoryId: string;
  articles: Article[];
  isLoading: boolean;
  error: string | null;
  // Action
  initData: () => Promise<void>;
  setActiveCategory: (categoryId: string) => Promise<void>;
}

export const useNewsStore = create<NewsState>((set, get) => ({
  categories: [],
  activeCategoryId: '',
  articles: [],
  isLoading: false,
  error: null,

  initData: async () => {
    set({ isLoading: true, error: null });

    try {
      const categories = await fetchCategories();
      const firstCategoryId = categories[0].id;
      const articles = await fetchArticlesByCategory(firstCategoryId);
      set({
        categories,
        activeCategoryId: firstCategoryId,
        articles,
        isLoading: false,
      });
    } catch (err) {
      set({
        error: err instanceof Error ? err.message : '發生未知錯誤',
        isLoading: false,
      });
    } finally {
      set({ isLoading: false });
    }
  },
  setActiveCategory: async (categoryId: string) => {
    if (get().activeCategoryId === categoryId) return;
    set({ activeCategoryId: categoryId, isLoading: true, error: null });
    try {
      const articles = await fetchArticlesByCategory(categoryId);
      set({ articles, isLoading: false });
    } catch (err) {
      set({
        error: err instanceof Error ? err.message : '發生未知錯誤',
        isLoading: false,
      });
    }
  },
}));
