import { ArticleDetail, formatRelativeTime } from '@org/data-access';

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
              {data?.updateTime && `更新於 ${formatRelativeTime(data.updateTime)} • `}
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
