import type { NewsItem } from './NewsTypes.ts';

type NewsCardProps = {
  newsItem: NewsItem;
};

/**
 * ?: 有拆的必要嗎？優缺點？
 */
export function NewsCard({ newsItem }: NewsCardProps) {
  const { title, publisher, imageUrl } = newsItem;

  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="col-span-1 aspect-video rounded overflow-hidden">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="col-span-3 flex flex-col">
        <div>{title}</div>
        <div className="text-neutral-400 text-sm">{publisher}</div>
      </div>
    </div>
  );
}
