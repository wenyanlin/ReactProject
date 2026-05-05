import { useRef, useState } from 'react';
import { ChangeEvent } from 'react';

type Comment = {
  id: number;
  content: string;
  likeCount: number;
};

const MAX_LENGTH = 200;

const initialComments: Comment[] = [
  {
    id: 1,
    content: '這是第一則留言',
    likeCount: 0,
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
      id: comments.length + 1,
      content: inputValue,
      likeCount: 0,
    };

    setComments((prev) => [newComment, ...prev]);

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

  const handleLike = (id: number) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === id
          ? { ...comment, likeCount: comment.likeCount + 1 }
          : comment,
      ),
    );
  };

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
            <button onClick={() => handleLike(comment.id)}>
              愛心 {comment.likeCount}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
