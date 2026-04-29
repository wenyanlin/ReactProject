import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Article, Category } from './newsTypes';
import { fetchArticlesByCategory, fetchCategories } from './newsApi';

export interface NewsState {
  categories: Category[];
  activeCategoryId: string;
  articles: Article[];
  isLoading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  categories: [],
  activeCategoryId: '',
  articles: [],
  isLoading: false,
  error: null,
};

export const initData = createAsyncThunk(
  'news/initData',
  async (_, { rejectWithValue }) => {
    try {
      const categories = await fetchCategories();
      const firstCategoryId = categories[0].id;
      const articles = await fetchArticlesByCategory(firstCategoryId);
      return { categories, activeCategoryId: firstCategoryId, articles };
    } catch (err) {
      return rejectWithValue(err instanceof Error ? err.message : '發生未知錯誤');
    }
  }
);

export const setActiveCategory = createAsyncThunk(
  'news/setActiveCategory',
  async (categoryId: string, { getState, rejectWithValue }) => {
    const state = (getState() as { news: NewsState }).news;
    if (state.activeCategoryId === categoryId) {
      return null;
    }
    try {
      const articles = await fetchArticlesByCategory(categoryId);
      return { categoryId, articles };
    } catch (err) {
      return rejectWithValue(err instanceof Error ? err.message : '發生未知錯誤');
    }
  }
);

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // initData
      .addCase(initData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(initData.fulfilled, (state, action) => {
        state.categories = action.payload.categories;
        state.activeCategoryId = action.payload.activeCategoryId;
        state.articles = action.payload.articles;
        state.isLoading = false;
      })
      .addCase(initData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // setActiveCategory
      .addCase(setActiveCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(setActiveCategory.fulfilled, (state, action) => {
        if (action.payload) {
          state.activeCategoryId = action.payload.categoryId;
          state.articles = action.payload.articles;
        }
        state.isLoading = false;
      })
      .addCase(setActiveCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default newsSlice.reducer;
