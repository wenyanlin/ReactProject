import { useRef, useState } from 'react';
import { ChangeEvent } from 'react';

type Comment = {
  id: number;
  content: string;
  likeCount: number;
  dislikeCount: number;
  userAction: 'like' | 'dislike' | null;
};

const MAX_LENGTH = 200;

const initialComments: Comment[] = [
  {
    id: Date.now() - 10000, // 確保比新留言舊
    content: '這是第一則留言',
    likeCount: 0,
    dislikeCount: 0,
    userAction: null,
  },
];

export function CommentSection() {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (inputValue.trim() === '') {
      alert('請輸入留言');
      return;
    }

    if (inputValue.length > MAX_LENGTH) {
      alert('留言內容不能超過200字');
      return;
    }

    const newComment = {
      id: Date.now(),
      content: inputValue,
      likeCount: 0,
      dislikeCount: 0,
      userAction: null,
    };

    setComments((prev) => {
      const updatedComments = [newComment, ...prev];
      return updatedComments.sort((a, b) => b.id - a.id);
    });

    setInputValue('');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= MAX_LENGTH) {
      setInputValue(value);
    }
  };

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleInteraction = (id: number, action: 'like' | 'dislike') => {
    setComments((prev) =>
      prev.map((comment) => {
        if (comment.id !== id) return comment;

        const { likeCount, dislikeCount, userAction } = comment;

        // 取消已經點過的按鈕
        if (userAction === action) {
          return {
            ...comment,
            likeCount: action === 'like' ? likeCount - 1 : likeCount,
            dislikeCount:
              action === 'dislike' ? dislikeCount - 1 : dislikeCount,
            userAction: null,
          };
        }

        // 點讚或倒讚
        return {
          ...comment,
          likeCount:
            action === 'like'
              ? likeCount + 1
              : userAction === 'like'
                ? likeCount - 1
                : likeCount,
          dislikeCount:
            action === 'dislike'
              ? dislikeCount + 1
              : userAction === 'dislike'
                ? dislikeCount - 1
                : dislikeCount,
          userAction: action,
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
    <section>
      <h2>留言區</h2>

      <p>目前共有 {comments.length} 則留言</p>

      <input
        ref={inputRef}
        value={inputValue}
        placeholder="請輸入留言"
        maxLength={MAX_LENGTH}
        onChange={handleInputChange}
      />

      <button onClick={handleSubmit}>送出</button>
      <button onClick={handleFocus}>Focus Input</button>

      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.content}</p>
            <button
              onClick={() => handleInteraction(comment.id, 'like')}
              style={{
                fontWeight: comment.userAction === 'like' ? 'bold' : 'normal',
              }}
            >
              {comment.userAction === 'like' ? (
                <span role="img" aria-label="已按讚">
                  ❤️
                </span>
              ) : (
                <span role="img" aria-label="未按讚">
                  🤍
                </span>
              )}{' '}
              讚 ({comment.likeCount})
            </button>
            <button
              onClick={() => handleInteraction(comment.id, 'dislike')}
              style={{
                fontWeight:
                  comment.userAction === 'dislike' ? 'bold' : 'normal',
              }}
            >
              <span role="img" aria-label="倒讚">
                👎
              </span>{' '}
              倒讚 ({comment.dislikeCount})
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
