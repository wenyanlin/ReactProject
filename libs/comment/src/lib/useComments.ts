import { Comment, mockComments } from './comment.mock';

export function useComments(newsId: string): Comment[] {
  return mockComments.filter((comment) => comment.newsId === newsId);
}
