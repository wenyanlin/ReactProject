import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Article } from '@org/data-access';

interface ArticleCardProps {
  data: Article;
}

export function ArticleCard({ data }: ArticleCardProps) {
  const { id, title, publisher, imageUrl } = data;

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Link to={`/article/${id}`} className="block group">
      <article className="grid grid-cols-8 gap-4 p-4 border-b border-gray-100 group-hover:bg-gray-50 transition-colors cursor-pointer">
        {/* left section */}
        <div className="col-span-2 aspect-video overflow-hidden rounded-lg bg-neutral-100">
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            srcSet={`https://picsum.photos/384/216?random=${id} 400w`}
            className={`
              w-full h-full object-cover transition-opacity duration-300 ease-in-out
              ${isLoaded ? 'opacity-100' : 'opacity-0'}
            `}
          />
        </div>
        {/* right section */}
        <div className="col-span-6">
          <h3 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">
            {title}
          </h3>
          <div className="text-sm text-neutral-400 mt-1">{publisher}</div>
        </div>
      </article>
    </Link>
  );
}
