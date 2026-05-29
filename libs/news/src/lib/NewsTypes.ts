// 1. 分類標籤
// 畫面需要：知道有哪些分類可以切換，以及目前反白的分類是誰。
export interface Category {
  id: string;
  name: string; // "焦點", "生活", "娛樂"
}

// 2. 新聞列表卡片
// 畫面需要：縮圖、標題、來源媒體、發布時間、留言數。
export interface NewsItem {
  id: string;
  categoryId: string; // 過濾分類
  title: string;
  publisher: string;
  publishTime: string;
  updateTime?: string; // 新增更新時間
  imageUrl: string;
  commentCount: number;
}

// 3. 單篇文章詳細內容
export interface NewsDetail extends NewsItem {
  content: string; // 文章的 HTML 結構
  tags: string[]; // 例如：["育兒津貼", "健保"]
}