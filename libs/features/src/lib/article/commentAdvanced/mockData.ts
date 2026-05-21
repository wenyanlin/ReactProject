import type { Comment, User } from "./types";

export const mockUser: User = {
  id: 1,
  name: "小明",
};

export const mockComments: Comment[] = [
  {
    id: 1,
    authorId: 1,
    content: "這是第一則留言",
    likeCount: 2,
    dislikeCount: 0,
    userAction: "none",
  },
  {
    id: 2,
    authorId: 2,
    content: "這是第二則留言",
    likeCount: 1,
    dislikeCount: 1,
    userAction: "none",
  },
];

export function fetchComments(): Promise<Comment[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockComments);
    }, 800);
  });
}
