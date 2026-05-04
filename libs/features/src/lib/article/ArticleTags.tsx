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
