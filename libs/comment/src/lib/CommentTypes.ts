export interface Comment {
  id: string;
  newsId: string;
  author: string;
  publishTime: string;
  content: string;
  likes: number;
  dislikes: number;
  replies?: Comment[]; // 回覆中的回覆 (可選欄位)
}