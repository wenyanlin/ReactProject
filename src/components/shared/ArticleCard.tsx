import { useState } from 'react';
import { Article } from '../../mock/newsData';

interface ArticleCardProps {
  data: Article;
}

export default function ArticleCard({ data }: ArticleCardProps) {
  const { id, title, publisher, imageUrl } = data;

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <article className="grid grid-cols-8 gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
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
        <h3>{title}</h3>
        <div className=" text-neutral-400">{publisher}</div>
      </div>
    </article>
  );
}
