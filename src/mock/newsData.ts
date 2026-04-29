// 1. 分類標籤
// 畫面需要：知道有哪些分類可以切換，以及目前反白的分類是誰。
export interface Category {
  id: string;
  name: string; // "焦點", "生活", "娛樂"
}

export const mockCategories: Category[] = [
  { id: 'c1', name: '焦點' },
  { id: 'c2', name: '推薦' },
  { id: 'c3', name: '娛樂' },
  { id: 'c4', name: '內追' },
  { id: 'c5', name: '選戰' },
  { id: 'c6', name: '生活' },
  { id: 'c7', name: '國際' },
  { id: 'c8', name: '追劇' },
  { id: 'c9', name: '電影' },
  { id: 'c10', name: '音樂' },
  { id: 'c11', name: '中國' },
  { id: 'c12', name: '運動' },
];

// 2. 新聞列表卡片
// 畫面需要：縮圖、標題、來源媒體、發布時間、留言數。
export interface Article {
  id: string;
  categoryId: string; // 過濾分類
  title: string;
  publisher: string;
  publishTime: string;
  imageUrl: string; 
  commentCount: number;
}

export const mockArticles: Article[] = [
  {
    id: 'a1',
    categoryId: 'c6', // 生活
    title: '8月新制！育兒津貼變多、健保擴大給付 9大措施懶人包',
    publisher: '三立新聞網',
    publishTime: '2026-04-28T08:00:00Z',
    imageUrl: 'https://picsum.photos/768/432?random=1',
    commentCount: 38,
  },
  {
    id: 'a2',
    categoryId: 'c7', // 國際
    title: '恢復正常生活 法國宣布：終結2年緊急狀態',
    publisher: '聯合新聞網',
    publishTime: '2026-04-28T09:15:00Z',
    imageUrl: 'https://picsum.photos/768/432?random=2',
    commentCount: 120,
  },
  {
    id: 'a3',
    categoryId: 'c1', // 焦點
    title: '小心！連資深股民都上當雙手奉上4千萬',
    publisher: '聯合新聞網',
    publishTime: '2026-04-28T10:30:00Z',
    imageUrl: 'https://picsum.photos/768/432?random=3',
    commentCount: 45,
  },
  {
    id: 'a4',
    categoryId: 'c6', // 生活
    title: '不要被「照騙」了！實測6款廚房用品很悲劇',
    publisher: '設計家',
    publishTime: '2026-04-27T14:20:00Z',
    imageUrl: 'https://picsum.photos/768/432?random=4',
    commentCount: 8,
  },
  {
    id: 'a5',
    categoryId: 'c3', // 娛樂
    title: '雙喜臨門超風光 下一個男主角「從沒合作過」',
    publisher: '週刊',
    publishTime: '2026-04-27T16:45:00Z',
    imageUrl: 'https://picsum.photos/768/432?random=5',
    commentCount: 210,
  },
  {
    id: 'a6',
    categoryId: 'c6', // 生活
    title: '育兒津貼今起加碼至5千 是少了 6大QA一次看',
    publisher: '三立新聞網',
    publishTime: '2026-04-27T11:00:00Z',
    imageUrl: 'https://picsum.photos/768/432?random=6',
    commentCount: 56,
  },
  {
    id: 'a7',
    categoryId: 'c6', // 生活
    title: '3條件被台女嫌到臭頭 男自嘲「配不上惹不起」改變',
    publisher: 'TVBS',
    publishTime: '2026-04-26T18:30:00Z',
    imageUrl: 'https://picsum.photos/768/432?random=7',
    commentCount: 312,
  },
  {
    id: 'a8',
    categoryId: 'c1', // 焦點
    title: '男友車上 見「小藍卡」 她不僅急問網見1前科：放生',
    publisher: 'TVBS',
    publishTime: '2026-04-26T20:15:00Z',
    imageUrl: 'https://picsum.photos/768/432?random=8',
    commentCount: 89,
  },
  {
    id: 'a9',
    categoryId: 'c1', // 焦點
    title: '獨家》房客欠租 養50隻狗「多數不會叫」恐聲帶遭割',
    publisher: '電子',
    publishTime: '2026-04-25T09:40:00Z',
    imageUrl: 'https://picsum.photos/768/432?random=9',
    commentCount: 150,
  }
];

// 3. 單篇文章詳細內容
export interface ArticleDetail extends Article {
  content: string; // 文章的 HTML 結構
  tags: string[]; // 例如：["育兒津貼", "健保"]
}

export const mockArticleDetails: ArticleDetail[] = [
  {
    ...mockArticles[0], // 繼承 a1 的基本資料
    content: `
      <p>今年8月起，許多新制即將上路，與民眾荷包息息相關！其中最受矚目的就是育兒津貼的加碼，以及健保擴大給付範圍。</p>
      <br />
      <h3>一、育兒津貼加碼</h3>
      <p>為了減輕家庭育兒負擔，政府宣布將育兒津貼自現行的每月3,500元，調高至5,000元。第二胎、第三胎以上的補助金額也同步提高。</p>
      <br />
      <h3>二、健保擴大給付</h3>
      <p>健保署考量民眾醫療需求，將多項罕見疾病藥物及特定醫材納入健保給付範圍，預計將有數萬名病患受惠。</p>
    `,
    tags: ['育兒津貼', '健保', '新制懶人包', '生活補助'],
  }
];

// 4. 留言
// 畫面需要：留言者名字、時間、內容、讚數、倒讚數，以及回覆。
export interface Comment {
  id: string;
  articleId: string;
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
    articleId: 'a1',
    author: '阿蠅',
    publishTime: '2026-04-28T08:26:00Z',
    content: '現今的房價給我打5折以下才是真正有幫助的',
    likes: 59,
    dislikes: 2,
    replies: [
      {
        id: 'r1',
        articleId: 'a1',
        author: '冠瑋',
        publishTime: '2026-04-28T08:30:00Z',
        content: '哪個執政可以做到，拜託樓主指點迷津，我也要投他~因為連對岸所「共產」，房子也是要自己買，責的離譜耶!!不知道樓主這個超優質政策是從哪個國家借鏡的~想知道><',
        likes: 0,
        dislikes: 0,
      }
    ]
  },
  {
    id: 'cm2',
    articleId: 'a1',
    author: 'a',
    publishTime: '2026-04-28T08:45:00Z',
    content: '全都一些廢的制度 三粒 請經歌功頌德!!',
    likes: 3,
    dislikes: 0,
  },
  {
    id: 'cm3',
    articleId: 'a1',
    author: '羽羽羽',
    publishTime: '2026-04-28T09:10:00Z',
    content: '房價高是惡性循環，誰的問題？你五折 了500萬的房子你會500萬賣掉嗎？',
    likes: 18,
    dislikes: 1,
  },
  {
    id: 'cm4',
    articleId: 'a1',
    author: 'Hung cheng wen',
    publishTime: '2026-04-28T09:25:00Z',
    content: '有夢最美，這個症腐怎麼可能得罪金主。',
    likes: 91,
    dislikes: 38,
  }
];