import {
  Article,
  ArticleDetail,
  Category,
  Comment,
} from './newsTypes';

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
  },
  {
    id: 'a10',
    categoryId: 'c2', // 推薦
    title: '【推薦】2026必看年度大作！這部電影讓全場觀眾起立鼓掌',
    publisher: '影視評論家',
    publishTime: '2026-04-28T12:00:00Z',
    imageUrl: 'https://picsum.photos/768/432?random=10',
    commentCount: 450,
  },
  {
    id: 'a11',
    categoryId: 'c12', // 運動
    title: 'NBA 季後賽開打！衛冕軍首戰失利 爆冷輸給黑馬',
    publisher: '體育報',
    publishTime: '2026-04-28T07:30:00Z',
    imageUrl: 'https://picsum.photos/768/432?random=11',
    commentCount: 88,
  },
  {
    id: 'a12',
    categoryId: 'c8', // 追劇
    title: '《黑暗榮耀》導演新作即將上線？傳將與宋慧喬再次合作',
    publisher: '娛樂週刊',
    publishTime: '2026-04-27T10:00:00Z',
    imageUrl: 'https://picsum.photos/768/432?random=12',
    commentCount: 230,
  },
  {
    id: 'a13',
    categoryId: 'c10', // 音樂
    title: '金曲獎入圍名單公佈！這位新銳歌手成為最大黑馬',
    publisher: '音樂地圖',
    publishTime: '2026-04-26T15:20:00Z',
    imageUrl: 'https://picsum.photos/768/432?random=13',
    commentCount: 156,
  },
  {
    id: 'a14',
    categoryId: 'c3', // 娛樂
    title: '震撼彈！演藝圈模範夫妻驚傳離婚 雙方經紀人發聲明',
    publisher: '星聞網',
    publishTime: '2026-04-28T14:45:00Z',
    imageUrl: 'https://picsum.photos/768/432?random=14',
    commentCount: 1200,
  },
  {
    id: 'a15',
    categoryId: 'c11', // 中國
    title: '北京車展亮點直擊：純電跑車續航力破千公里引發關注',
    publisher: '財經日報',
    publishTime: '2026-04-27T09:10:00Z',
    imageUrl: 'https://picsum.photos/768/432?random=15',
    commentCount: 42,
  },
  {
    id: 'a16',
    categoryId: 'c12', // 運動
    title: '中職大巨蛋首戰湧入4萬人 創下歷史最高票房紀錄',
    publisher: '運動時報',
    publishTime: '2026-04-26T21:00:00Z',
    imageUrl: 'https://picsum.photos/768/432?random=16',
    commentCount: 205,
  },
  {
    id: 'a17',
    categoryId: 'c2', // 推薦
    title: '週末去哪玩？全台5大「賞花秘境」大公開 不用排隊也好拍',
    publisher: '旅遊玩家',
    publishTime: '2026-04-25T11:30:00Z',
    imageUrl: 'https://picsum.photos/768/432?random=17',
    commentCount: 77,
  },
  {
    id: 'a18',
    categoryId: 'c9', // 電影
    title: '漫威新英雄曝光？傳奇影星秘密加盟 角色設定引發猜測',
    publisher: '電影神搜',
    publishTime: '2026-04-28T16:20:00Z',
    imageUrl: 'https://picsum.photos/768/432?random=18',
    commentCount: 310,
  },
  {
    id: 'a19',
    categoryId: 'c8', // 追劇
    title: 'Netflix 5月新片單！多部熱門韓劇回歸 週末不怕沒劇追',
    publisher: '劇評人',
    publishTime: '2026-04-27T18:00:00Z',
    imageUrl: 'https://picsum.photos/768/432?random=19',
    commentCount: 145,
  },
  {
    id: 'a20',
    categoryId: 'c5', // 選戰
    title: '2026地方大選倒數計時！最新民調顯示「他」支持度領先',
    publisher: '政治評論',
    publishTime: '2026-04-28T06:00:00Z',
    imageUrl: 'https://picsum.photos/768/432?random=20',
    commentCount: 890,
  },
];

export const mockArticleDetails: ArticleDetail[] = [
  {
    ...mockArticles[0],
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
  },
  {
    ...mockArticles[10], // a11 NBA
    content: `
      <p>2026年 NBA 季後賽首輪正式開打，衛冕軍在主場迎戰黑馬球隊，卻在第四節慘遭逆轉。</p>
      <br />
      <p>雖然當家球星砍下全場最高 35 分，但球隊在防守端出現多次失誤，最終以 3 分之差惜敗。</p>
      <br />
      <p>下一場比賽將於後天移師對方主場，衛冕軍是否能重整旗鼓，值得球迷持續關注。</p>
    `,
    tags: ['NBA', '季後賽', '籃球', '體育新聞'],
  },
  {
    ...mockArticles[13], // a14 離婚
    content: `
      <p>演藝圈今日傳出震撼彈，被公認為模範夫妻的兩人，在共同發布的聲明中宣布結束十年婚姻。</p>
      <br />
      <p>聲明表示，雙方是和平分手，未來將共同撫養孩子，並希望外界能給予空間，不要過度揣測。</p>
      <br />
      <p>消息一出，社群平台瞬間引發熱烈討論，不少網友表示「不再相信愛情」。</p>
    `,
    tags: ['演藝圈', '離婚', '震撼彈', '模範夫妻'],
  },
  {
    ...mockArticles[19], // a20 選戰
    content: `
      <p>隨著 2026 年地方大選逼近，各政黨候選人紛紛出招，最新的民調數據顯示戰況異常膠著。</p>
      <br />
      <p>分析指出，中間選民的流向將成為最後勝負的關鍵。目前領先的候選人在年輕族群中擁有較高支持度，但在長輩族群中則相對弱勢。</p>
      <br />
      <p>未來幾週的政策白皮書發布，預計將對民調產生進一步影響。</p>
    `,
    tags: ['2026大選', '民調', '政治', '選戰'],
  },
];

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
        content:
          '哪個執政可以做到，拜託樓主指點迷津，我也要投他~因為連對岸所「共產」，房子也是要自己買，責的離譜耶!!不知道樓主這個超優質政策是從哪個國家借鏡的~想知道><',
        likes: 0,
        dislikes: 0,
      },
    ],
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
    content:
      '房價高是惡性循環，誰的問題？你五折 了500萬的房子你會500萬賣掉嗎？',
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
  },
];