export interface Comment {
  id: string;
  newsId: string;
  author: string;
  publishTime: string;
  content: string;
  likes: number;
  dislikes: number;
  replies?: Comment[]; // 回覆中的回覆 (可選欄位)
}

export const mockComments: Comment[] = [
  {
    id: 'cm1',
    newsId: 'a1',
    author: '阿蠅',
    publishTime: '2026-04-28T08:26:00Z',
    content: '現今的房價給我打5折以下才是真正有幫助的',
    likes: 59,
    dislikes: 2,
    replies: [
      {
        id: 'r1',
        newsId: 'a1',
        author: '冠瑋',
        publishTime: '2026-04-28T08:30:00Z',
        content:
          '哪個執政可以做到，拜託樓主指點迷津，我也要投他~因為連對岸所「共產」，房子也是要自己買，責的離譜耶!!不知道樓主這個超優質政策是從哪個國家借鏡的~想知道><',
        likes: 0,
        dislikes: 0,
      },
    ],
  },
  {
    id: 'cm2',
    newsId: 'a1',
    author: 'a',
    publishTime: '2026-04-28T08:45:00Z',
    content: '全都一些廢的制度 三粒 請經歌功頌德!!',
    likes: 3,
    dislikes: 0,
  },
  {
    id: 'cm3',
    newsId: 'a1',
    author: '羽羽羽',
    publishTime: '2026-04-28T09:10:00Z',
    content:
      '房價高是惡性循環，誰的問題？你五折 了500萬的房子你會500萬賣掉嗎？',
    likes: 18,
    dislikes: 1,
  },
  {
    id: 'cm4',
    newsId: 'a1',
    author: 'Hung cheng wen',
    publishTime: '2026-04-28T09:25:00Z',
    content: '有夢最美，這個症腐怎麼可能得罪金主。',
    likes: 91,
    dislikes: 38,
  },
];
