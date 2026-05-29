import type { Comment } from './CommentTypes';
import { mockComments } from './comment.mock';

/**
 * 模擬從後端非同步獲取留言列表，包含 600ms 的網路延遲
 */
export async function fetchComments(newsId: string): Promise<Comment[]> {
  await new Promise((resolve) => setTimeout(resolve, 600));
  return mockComments.filter((comment) => comment.newsId === newsId);
}