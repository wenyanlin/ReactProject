export type User = {
  id: number;
  name: string;
};

export type AuthContextValue = {
  user: User | null;
};

export type IntersectionStatus = 'liked' | 'disliked' | 'none';

export type Comment = {
  id: number;
  authorId: number;
  content: string;
  likeCount: number;
  dislikeCount: number;
  userAction: IntersectionStatus;
};
