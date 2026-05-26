import { Link, useParams } from 'react-router-dom';
import {
  useEffect,
  useState,
  KeyboardEvent,
  Ref,
  ChangeEvent,
  useRef,
} from 'react';
import {
  ArticleDetail,
  Category,
  fetchArticleById,
  fetchCategories,
  formatRelativeTime,
} from '@org/data-access';

export function ArticlePage() {
  const { articleId } = useParams();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isCategoriesLoading, setIsCategoriesLoading] =
    useState<boolean>(false);
  const [categoriesError, setCategoriesError] = useState<string | null>(null);
  const [articleDetail, setArticleDetail] = useState<ArticleDetail | null>(
    null,
  );
  const [isArticleDetailLoading, setIsArticleDetailLoading] =
    useState<boolean>(false);
  const [articleDetailError, setArticleDetailError] = useState<string | null>(
    null,
  );

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setIsCategoriesLoading(true);
        const rawCategories = await fetchCategories();
        if (!rawCategories || rawCategories.length === 0) {
          setCategoriesError('沒有分類資料');
          return;
        }
        setCategories(rawCategories);
      } catch (err) {
        console.log(err);
        setCategoriesError('載入分類失敗');
      } finally {
        setIsCategoriesLoading(false);
      }
    };
    loadCategories();
  }, []);

  useEffect(() => {
    const loadArticleDetail = async () => {
      try {
        setIsArticleDetailLoading(true);
        const rawArticleDetail = await fetchArticleById(articleId || '');
        if (!rawArticleDetail) {
          setArticleDetailError('沒有新聞內容');
          return;
        }
        setArticleDetail(rawArticleDetail);
      } catch (err) {
        console.log(err);
        setArticleDetailError('載入新聞內容失敗');
      } finally {
        setIsArticleDetailLoading(false);
      }
    };
    loadArticleDetail();
  }, [articleId]);

  const currentCategory = categories.find(
    (cat) => cat.id === articleDetail?.categoryId,
  );

  return (
    <div className="min-h-screen ">
      <nav className="p-2 flex items-center">
        <Link
          to="/"
          className="m-2 block w-6 h-6 bg-neutral-200 aspect-square rounded-lg"
        ></Link>
        {currentCategory && (
          <Link to={`/${currentCategory.id}`} className="text-sm text-gray-500">
            {currentCategory.name}
          </Link>
        )}
      </nav>
      {articleDetailError && (
        <div className="p-4 text-red-500 text-center">{articleDetailError}</div>
      )}
      {isArticleDetailLoading ? (
        <div className="p-8 text-center text-neutral-500">新聞載入中...</div>
      ) : articleDetail ? (
        <>
          <ArticleHeader data={articleDetail} />
          {articleDetail.imageUrl && (
            <div className="w-full h-96 bg-neutral-100 overflow-hidden">
              <img
                src={articleDetail.imageUrl}
                alt={articleDetail.title}
                onLoad={() => setIsImageLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-300 ease-in-out ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
          )}
          <div
            className="p-4"
            dangerouslySetInnerHTML={{ __html: articleDetail?.content }}
          />
          <ArticleTags tags={articleDetail?.tags || []} />
          <CommentSection />
        </>
      ) : (
        <div className="p-8 text-center text-neutral-500">目前沒有相關新聞</div>
      )}
    </div>
  );
}

interface ArticleCardProps {
  data: ArticleDetail;
}

export function ArticleHeader({ data }: ArticleCardProps) {
  return (
    <div className="p-4 border-b">
      <h1 className="text-2xl font-bold mb-2">{data?.title}</h1>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <div className="w-12 h-12 bg-neutral-300 rounded-full aspect-square overflow-hidden">
            <img src="https://picsum.photos/48/48" alt="" />
          </div>
          <div className="flex flex-col justify-center gap-1">
            <div className="text-sm font-medium">{data?.publisher}</div>
            <div className="text-xs text-gray-500">
              {data?.updateTime &&
                `更新於 ${formatRelativeTime(data.updateTime)} • `}
              發布於 {formatRelativeTime(data?.publishTime)}
            </div>
          </div>
        </div>
        <div className="bg-green-500 text-white text-sm px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
          <button className="cursor-pointer">訂閱</button>
        </div>
      </div>
    </div>
  );
}

interface ArticleTagsProps {
  tags: string[];
}

export function ArticleTags({ tags }: ArticleTagsProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 p-4">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-2 py-1 text-xs text-neutral-100-600 bg-neutral-200 rounded"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
}

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

export interface CommentInputProps {
  onKeyDown?: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  charLengthRef?: Ref<HTMLSpanElement>;
  maxLength: number;
  placeholder?: string;
  ref?: Ref<HTMLTextAreaElement>;
}

export function CommentInput({
  onKeyDown,
  onChange,
  charLengthRef,
  maxLength,
  placeholder,
  ref,
}: CommentInputProps) {
  console.log('CommentInput rendered');
  return (
    <div className="relative w-full flex items-center gap-4 rounded-md">
      <textarea
        ref={ref}
        placeholder={placeholder}
        maxLength={maxLength}
        onKeyDown={onKeyDown}
        onChange={onChange}
        className="w-full h-16 pl-4 my-3 resize-none focus:outline-none"
      />
      <div className="pr-4 text-nowrap text-xs">
        <span ref={charLengthRef}>0</span> / {maxLength}
      </div>
    </div>
  );
}

interface CommentListProps {
  comments: Comment[];
  onInteraction: (id: number, action: 'like' | 'dislike') => void;
  onDelete: (id: number) => void;
}

export function CommentList({
  comments,
  onInteraction,
  onDelete,
}: CommentListProps) {
  return (
    <ul className="p-4 flex flex-col gap-4">
      {comments.length === 0
        ? '目前沒有留言'
        : comments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              onInteraction={onInteraction}
              onDelete={onDelete}
            />
          ))}
    </ul>
  );
}

export interface Comment {
  id: number;
  content: string;
  likeCount: number;
  dislikeCount: number;
  userAction: 'like' | 'dislike' | null;
}

interface CommentItemProps {
  comment: Comment;
  onInteraction: (id: number, action: 'like' | 'dislike') => void;
  onDelete: (id: number) => void;
}

export function CommentItem({
  comment,
  onInteraction,
  onDelete,
}: CommentItemProps) {
  return (
    <li className="p-3 border border-neutral-200 relative">
      <div className="flex justify-between items-start mb-2">
        <p className="text-neutral-800 flex-1 whitespace-pre-wrap">
          {comment.content}
        </p>
        <button
          className="text-neutral-400 hover:text-neutral-600 text-sm ml-2 duration-150 transition-colors cursor-pointer"
          onClick={() => onDelete(comment.id)}
        >
          ×
        </button>
      </div>
      <div className="flex justify-end gap-2">
        {/* Like Button */}
        <button
          onClick={() => onInteraction(comment.id, 'like')}
          className={`
            flex items-center gap-2 px-3 py-1 border rounded-md transition-all duration-150 cursor-pointer 
            ${
              comment.userAction === 'like'
                ? 'border-green-500 bg-green-50 text-green-600'
                : 'border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300'
            }
          `}
        >
          <span className="text-xs">▲</span>
          <span className="text-sm font-medium">{comment.likeCount}</span>
        </button>

        {/* Dislike Button */}
        <button
          onClick={() => onInteraction(comment.id, 'dislike')}
          className={`
            flex items-center gap-2 px-3 py-1 border rounded-md transition-all duration-150 cursor-pointer 
            ${
              comment.userAction === 'dislike'
                ? 'border-red-500 bg-red-50 text-red-600'
                : 'border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300'
            }
          `}
        >
          <span className="text-xs">▼</span>
          <span className="text-sm font-medium">{comment.dislikeCount}</span>
        </button>
      </div>
    </li>
  );
}
