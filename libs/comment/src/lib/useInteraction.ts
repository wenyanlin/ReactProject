import { useState } from 'react';
import type { Comment } from './CommentTypes';

export interface InteractionState {
  likes: number;
  dislikes: number;
  userAction: 'like' | 'dislike' | null;
}

export function useInteraction() {
  const [interactions, setInteractions] = useState<Record<string, InteractionState>>({});

  const getInteraction = (comment: Comment): InteractionState => {
    return (
      interactions[comment.id] || {
        likes: comment.likes,
        dislikes: comment.dislikes,
        userAction: null,
      }
    );
  };

  const handleLike = (comment: Comment) => {
    const current = getInteraction(comment);
    let nextAction: 'like' | 'dislike' | null = null;
    let nextLikes = current.likes;
    let nextDislikes = current.dislikes;

    if (current.userAction === 'like') {
      nextAction = null;
      nextLikes = Math.max(0, current.likes - 1);
    } else {
      nextAction = 'like';
      nextLikes = current.likes + 1;
      if (current.userAction === 'dislike') {
        nextDislikes = Math.max(0, current.dislikes - 1);
      }
    }

    setInteractions((prev) => ({
      ...prev,
      [comment.id]: {
        likes: nextLikes,
        dislikes: nextDislikes,
        userAction: nextAction,
      },
    }));
  };

  const handleDislike = (comment: Comment) => {
    const current = getInteraction(comment);
    let nextAction: 'like' | 'dislike' | null = null;
    let nextLikes = current.likes;
    let nextDislikes = current.dislikes;

    if (current.userAction === 'dislike') {
      nextAction = null;
      nextDislikes = Math.max(0, current.dislikes - 1);
    } else {
      nextAction = 'dislike';
      nextDislikes = current.dislikes + 1;
      if (current.userAction === 'like') {
        nextLikes = Math.max(0, current.likes - 1);
      }
    }

    setInteractions((prev) => ({
      ...prev,
      [comment.id]: {
        likes: nextLikes,
        dislikes: nextDislikes,
        userAction: nextAction,
      },
    }));
  };

  return {
    getInteraction,
    handleLike,
    handleDislike,
  };
}
