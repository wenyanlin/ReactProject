import { memo } from "react";

type CommentStatsProps = {
  stats: {
    totalComments: number;
    totalLikes: number;
    totalDislikes: number;
  };
};

export const CommentStats = memo(function CommentStats({
  stats,
}: CommentStatsProps) {
  return (
    <div>
      <p>總留言數：{stats.totalComments}</p>
      <p>總愛心數：{stats.totalLikes}</p>
      <p>總倒讚數：{stats.totalDislikes}</p>
    </div>
  );
});
