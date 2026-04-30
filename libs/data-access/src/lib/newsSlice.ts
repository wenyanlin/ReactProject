import {
  createSlice,
  createAsyncThunk,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { Article, Category, ArticleDetail } from './newsTypes';
import {
  fetchArticlesByCategory,
  fetchCategories,
  fetchArticleById,
} from './newsApi';

export interface NewsState {
  categories: Category[];
  activeCategoryId: string;
  articles: Article[];
  articleDetail?: ArticleDetail | null;
  comments: Comment[];
  isLoading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  categories: [],
  activeCategoryId: '',
  articles: [],
  articleDetail: null,
  comments: [],
  isLoading: false,
  error: null,
};

export const loadArticleList = createAsyncThunk(
  'news/loadArticleList',
  async (_, { rejectWithValue }) => {
    try {
      const categories = await fetchCategories();
      const firstCategoryId = categories[0].id;
      const articles = await fetchArticlesByCategory(firstCategoryId);
      return { categories, activeCategoryId: firstCategoryId, articles };
    } catch (err) {
      return rejectWithValue(
        err instanceof Error ? err.message : '發生未知錯誤',
      );
    }
  },
);

export const loadCategories = createAsyncThunk(
  'news/loadCategories',
  async (_, { rejectWithValue }) => {
    try {
      const categories = await fetchCategories();
      return categories;
    } catch (err) {
      return rejectWithValue(
        err instanceof Error ? err.message : '無法取得分類資料',
      );
    }
  },
);

export const loadActiveCategory = createAsyncThunk(
  'news/loadActiveCategory',
  async (categoryId: string, { getState, rejectWithValue }) => {
    const state = (getState() as { news: NewsState }).news;
    if (state.activeCategoryId === categoryId) {
      return null;
    }
    try {
      const articles = await fetchArticlesByCategory(categoryId);
      return { categoryId, articles };
    } catch (err) {
      return rejectWithValue(
        err instanceof Error ? err.message : '發生未知錯誤',
      );
    }
  },
);

export const loadArticle = createAsyncThunk(
  'news/loadArticle',
  async (articleId: string, { rejectWithValue }) => {
    try {
      const article = await fetchArticleById(articleId);
      return article;
    } catch (err) {
      return rejectWithValue(
        err instanceof Error ? err.message : '無法取得文章內容',
      );
    }
  },
);

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadArticleList.fulfilled, (state, action) => {
        if (action.payload) {
          state.categories = action.payload.categories;
          state.activeCategoryId = action.payload.activeCategoryId;
          state.articles = action.payload.articles;
        }
        state.isLoading = false;
      })
      .addCase(loadActiveCategory.fulfilled, (state, action) => {
        if (action.payload) {
          state.activeCategoryId = action.payload.categoryId;
          state.articles = action.payload.articles;
        }
        state.isLoading = false;
      })
      .addCase(loadArticle.fulfilled, (state, action) => {
        if (action.payload) {
          state.articleDetail = action.payload;
        }
        state.isLoading = false;
      })
      .addCase(loadCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addMatcher(
        isPending(
          loadArticleList,
          loadActiveCategory,
          loadArticle,
          loadCategories,
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        },
      )
      .addMatcher(
        isRejected(
          loadArticleList,
          loadActiveCategory,
          loadArticle,
          loadCategories,
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload as string;
        },
      );
  },
});

export default newsSlice.reducer;
