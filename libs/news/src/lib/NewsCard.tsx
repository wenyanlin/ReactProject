import type { NewsItem } from './NewsTypes.ts';
import { formatDate } from '@org/shared-utils'

type NewsCardProps = {
  newsItem: NewsItem;
};

export function NewsCard({ newsItem }: NewsCardProps) {
  const { title, publisher, imageUrl, publishTime, commentCount } = newsItem;

  return (
    <div className="flex gap-4 p-4 select-none border-b border-slate-100 last:border-b-0">
      <div className="w-32 h-24 shrink-0 overflow-hidden bg-slate-100">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-slate-400 mb-1">
            {publisher}
          </span>

          <h3 className="text-base font-bold text-slate-800 leading-snug line-clamp-2">
            {title}
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mt-1 shrink-0">
          <span>{formatDate(publishTime)}</span>
          <span>•</span>
          <span>{commentCount} 則留言</span>
        </div>
      </div>
    </div>
  );
}
