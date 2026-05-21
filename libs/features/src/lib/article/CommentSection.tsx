import { useRef, useState, ChangeEvent, useMemo } from 'react';
import { CommentInput } from './comment/CommentInput';
import { CommentList } from './comment/CommentList';
import { Comment } from './comment/CommentItem';

const MAX_LENGTH = 200;

const initialComments: Comment[] = [
  {
    id: 0,
    content: '這是第一則留言',
    likeCount: 0,
    dislikeCount: 0,
    userAction: null,
  },
];

export function CommentSection() {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const idRef = useRef(1);

  const handleDelete = (id: number) => {
    if (window.confirm('確定要刪除這則留言嗎？')) {
      setComments((prev) => prev.filter((comment) => comment.id !== id));
    }
  };

  const handleClearAll = () => {
    if (window.confirm('警告：這將會移除所有留言，確定嗎？')) {
      setComments([]);
    }
  };

  const handleSubmit = () => {
    const value = inputRef.current?.value || '';

    if (value.trim() === '') {
      alert('請輸入留言');
      return;
    }

    if (value.length > MAX_LENGTH) {
      alert('留言內容不能超過200字');
      return;
    }

    const newComment = {
      id: idRef.current++,
      content: value,
      likeCount: 0,
      dislikeCount: 0,
      userAction: null,
    };

    setComments((prev) => [newComment, ...prev]);

    if (inputRef.current) {
      inputRef.current.value = '';
    }
    handleFocus();
  };

  // const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   const value = e.target.value;
  //   if (value.length <= MAX_LENGTH) {
  //     setInputValue(value);
  //   }
  // };

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSubmit();
    }
  };

  const handleInteraction = (id: number, action: 'like' | 'dislike') => {
    setComments((prev) =>
      prev.map((comment) => {
        if (comment.id !== id) return comment;

        const { likeCount, dislikeCount, userAction } = comment;

        // 先把舊的動作扣掉
        const baseLike = userAction === 'like' ? likeCount - 1 : likeCount;
        const baseDislike =
          userAction === 'dislike' ? dislikeCount - 1 : dislikeCount;

        // 決定新的動作
        const nextAction = userAction === action ? null : action;

        // 加上新動作的影響
        return {
          ...comment,
          userAction: nextAction,
          likeCount: nextAction === 'like' ? baseLike + 1 : baseLike,
          dislikeCount:
            nextAction === 'dislike' ? baseDislike + 1 : baseDislike,
        };
      }),
    );
  };

  //   const handleLike = (id: number) => {
  //     setComments((prev) =>
  //       prev.map((comment) =>
  //         comment.id === id
  //           ? { ...comment, likeCount: comment.likeCount + 1 }
  //           : comment,
  //       ),
  //     );
  //   };

  return (
    <section className="py-4">
      <h2 className="px-4 pb-2 border-b border-neutral-200 font-medium">
        留言 {comments.length}
      </h2>

      <CommentInput
        ref={inputRef}
        placeholder="新增留言"
        maxLength={MAX_LENGTH}
        onKeyDown={handleKeyDown}
      />

      <div className="px-4 flex gap-2 justify-end *:border *:border-neutral-200 *:text-sm *:text-neutral-600 *:px-2 *:py-0.5 *:rounded-md *:transition-colors *:duration-150 *:cursor-pointer *:hover:bg-neutral-50 *:hover:border-neutral-300">
        <button onClick={handleSubmit}>送出</button>
        <button onClick={handleFocus}>Focus Input</button>
        {comments.length > 0 && (
          <button onClick={handleClearAll}>清空所有留言</button>
        )}
      </div>

      <CommentList
        comments={comments}
        onInteraction={handleInteraction}
        onDelete={handleDelete}
      />
    </section>
  );
}
