import { Comment } from './CommentTypes';

export const mockComments: Comment[] = [
  // ==========================================
  // a1: 8月新制！育兒津貼變多 (5 comments)
  // ==========================================
  {
    id: 'cm-a1-1',
    newsId: 'a1',
    author: '阿蠅',
    publishTime: '2026-04-28T08:26:00Z',
    content: '現今的房價給我打5折以下才是真正有幫助的',
    likes: 59,
    dislikes: 2,
    replies: [
      {
        id: 'r-a1-1',
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
    id: 'cm-a1-2',
    newsId: 'a1',
    author: 'a',
    publishTime: '2026-04-28T08:45:00Z',
    content: '全都一些廢的制度 三粒 請經歌功頌德!!',
    likes: 3,
    dislikes: 0,
  },
  {
    id: 'cm-a1-3',
    newsId: 'a1',
    author: '羽羽羽',
    publishTime: '2026-04-28T09:10:00Z',
    content:
      '房價高是惡性循環，誰的問題？你五折 了500萬的房子你會500萬賣掉嗎？',
    likes: 18,
    dislikes: 1,
  },
  {
    id: 'cm-a1-4',
    newsId: 'a1',
    author: 'Hung cheng wen',
    publishTime: '2026-04-28T09:25:00Z',
    content: '有夢最美，這個症腐怎麼可能得罪金主。',
    likes: 91,
    dislikes: 38,
  },

  // ==========================================
  // a2: 法國宣布終結緊急狀態 (4 comments)
  // ==========================================
  {
    id: 'cm-a2-1',
    newsId: 'a2',
    author: '自由之風',
    publishTime: '2026-04-28T09:30:00Z',
    content: '終於可以不用戴口罩出門了！法國這步走得對。',
    likes: 12,
    dislikes: 1,
    replies: [
      {
        id: 'r-a2-1',
        newsId: 'a2',
        author: '路過的人',
        publishTime: '2026-04-28T09:35:00Z',
        content: '但還是要注意個人衛生，病毒並沒有完全消失。',
        likes: 3,
        dislikes: 0,
      },
    ],
  },
  {
    id: 'cm-a2-2',
    newsId: 'a2',
    author: '旅遊達人',
    publishTime: '2026-04-28T10:00:00Z',
    content: '太棒了，下個月剛好安排去巴黎旅遊，可以直接去塞納河畔散步了！',
    likes: 25,
    dislikes: 0,
  },
  {
    id: 'cm-a2-3',
    newsId: 'a2',
    author: '憂心忡忡',
    publishTime: '2026-04-28T10:15:00Z',
    content: '一下子完全解禁，醫療系統真的撐得住嗎？有點擔心。',
    likes: 8,
    dislikes: 4,
  },

  // ==========================================
  // a3: 資深股民遭騙4千萬 (3 comments)
  // ==========================================
  {
    id: 'cm-a3-1',
    newsId: 'a3',
    author: '韭菜阿明',
    publishTime: '2026-04-28T11:00:00Z',
    content: '現在的投資群組十個有十一個是騙人的，千萬別信什麼穩賺不賠！',
    likes: 42,
    dislikes: 0,
    replies: [
      {
        id: 'r-a3-1',
        newsId: 'a3',
        author: '防詐尖兵',
        publishTime: '2026-04-28T11:05:00Z',
        content: '沒錯！只要提到「保證獲利」、「代操盤」絕對是詐騙！',
        likes: 15,
        dislikes: 0,
      },
    ],
  },
  {
    id: 'cm-a3-2',
    newsId: 'a3',
    author: '老股民',
    publishTime: '2026-04-28T11:20:00Z',
    content:
      '資深股民還會被騙，看來真的是被貪心沖昏了頭，四千萬就這樣沒了，真慘。',
    likes: 30,
    dislikes: 2,
  },

  // ==========================================
  // a4: 廚房用品照騙大翻車 (2 comments)
  // ==========================================
  {
    id: 'cm-a4-1',
    newsId: 'a4',
    author: '主婦小蘭',
    publishTime: '2026-04-27T15:00:00Z',
    content:
      '那個三秒切片切菜機我也有買，根本切不動，洗的時候還超難洗，直接丟角落。',
    likes: 18,
    dislikes: 0,
  },
  {
    id: 'cm-a4-2',
    newsId: 'a4',
    author: '網購狂魔',
    publishTime: '2026-04-27T15:15:00Z',
    content: '還好有看到這篇實測，本來差點手滑下單平底鍋了，感謝滅火！',
    likes: 14,
    dislikes: 1,
  },

  // ==========================================
  // a5: 雙喜臨門超風光 (3 comments)
  // ==========================================
  {
    id: 'cm-a5-1',
    newsId: 'a5',
    author: '影迷小愛',
    publishTime: '2026-04-27T17:00:00Z',
    content: '該不會是那位剛拿到影帝的演技派吧？超級期待！',
    likes: 19,
    dislikes: 0,
    replies: [
      {
        id: 'r-a5-1',
        newsId: 'a5',
        author: '路人甲',
        publishTime: '2026-04-27T17:05:00Z',
        content: '如果是他的話，這部片票房絕對穩了！',
        likes: 5,
        dislikes: 0,
      },
    ],
  },
  {
    id: 'cm-a5-2',
    newsId: 'a5',
    author: '八卦大師',
    publishTime: '2026-04-27T17:30:00Z',
    content: '感覺是個大動作，期待官方下個月的記者會公布名單。',
    likes: 8,
    dislikes: 1,
  },

  // ==========================================
  // a6: 育兒津貼加碼 6大QA (2 comments)
  // ==========================================
  {
    id: 'cm-a6-1',
    newsId: 'a6',
    author: '奶爸日記',
    publishTime: '2026-04-27T12:00:00Z',
    content: '每個月5千雖然不多，但買奶粉和尿布還是能補貼一些，不無小補。',
    likes: 22,
    dislikes: 0,
  },
  {
    id: 'cm-a6-2',
    newsId: 'a6',
    author: '媽媽的心聲',
    publishTime: '2026-04-27T12:15:00Z',
    content: '希望申請手續能再簡化一點，有時候跑流程真的很繁瑣。',
    likes: 31,
    dislikes: 2,
  },

  // ==========================================
  // a7: 3條件被台女嫌到臭頭 (4 comments)
  // ==========================================
  {
    id: 'cm-a7-1',
    newsId: 'a7',
    author: '理性討論',
    publishTime: '2026-04-26T19:00:00Z',
    content: '每個人都有選擇對象的自由，條件不合就各自安好，沒必要互相指責。',
    likes: 88,
    dislikes: 3,
    replies: [
      {
        id: 'r-a7-1',
        newsId: 'a7',
        author: '吃瓜群眾',
        publishTime: '2026-04-26T19:05:00Z',
        content: '同意，開出高條件是她的自由，但找不找得到就是另一回事了。',
        likes: 24,
        dislikes: 1,
      },
    ],
  },
  {
    id: 'cm-a7-2',
    newsId: 'a7',
    author: '奮鬥小青',
    publishTime: '2026-04-26T19:30:00Z',
    content: '與其抱怨社會，不如好好提升自己，讓自己變得更有價值。',
    likes: 54,
    dislikes: 2,
  },
  {
    id: 'cm-a7-3',
    newsId: 'a7',
    author: '緣分天空',
    publishTime: '2026-04-26T20:00:00Z',
    content: '感情還是看三觀合不合，物質條件只是輔助，不然結了婚也不會幸福。',
    likes: 41,
    dislikes: 0,
  },

  // ==========================================
  // a8: 男友車上見小藍卡 (3 comments)
  // ==========================================
  {
    id: 'cm-a8-1',
    newsId: 'a8',
    author: '心碎女孩',
    publishTime: '2026-04-26T20:45:00Z',
    content: '這真的要快刀斬亂麻，有前科還隱瞞，以後怎麼互相信任？',
    likes: 45,
    dislikes: 1,
    replies: [
      {
        id: 'r-a8-1',
        newsId: 'a8',
        author: '旁觀者',
        publishTime: '2026-04-26T20:50:00Z',
        content: '真的，信任一旦有了裂痕，就很難再修復了。',
        likes: 12,
        dislikes: 0,
      },
    ],
  },
  {
    id: 'cm-a8-2',
    newsId: 'a8',
    author: '警覺貓咪',
    publishTime: '2026-04-26T21:10:00Z',
    content: '男友車上有奇奇怪怪的東西真的要多留心，女人的直覺往往很準。',
    likes: 38,
    dislikes: 2,
  },

  // ==========================================
  // a9: 房客欠租養50隻狗 (3 comments)
  // ==========================================
  {
    id: 'cm-a9-1',
    newsId: 'a9',
    author: '動保尖兵',
    publishTime: '2026-04-25T10:00:00Z',
    content: '這簡直是虐待動物！割除聲帶太殘忍了，必須重罰！',
    likes: 112,
    dislikes: 0,
    replies: [
      {
        id: 'r-a9-1',
        newsId: 'a9',
        author: '愛狗人士',
        publishTime: '2026-04-25T10:05:00Z',
        content: '看到這新聞心都碎了，那些狗太可憐了，希望能得到妥善安置。',
        likes: 56,
        dislikes: 1,
      },
    ],
  },
  {
    id: 'cm-a9-2',
    newsId: 'a9',
    author: '正義使者',
    publishTime: '2026-04-25T10:30:00Z',
    content: '欠租還虐狗，這房客的人品真的有夠差，支持房東提告！',
    likes: 78,
    dislikes: 2,
  },

  // ==========================================
  // a10: 2026必看年度大作 (4 comments)
  // ==========================================
  {
    id: 'cm-a10-1',
    newsId: 'a10',
    author: '影評人K',
    publishTime: '2026-04-28T12:30:00Z',
    content: '這部片絕對是今年的黑馬，導演的敘事手法太高級了，必看！',
    likes: 85,
    dislikes: 2,
    replies: [
      {
        id: 'r-a10-1',
        newsId: 'a10',
        author: '電影狂熱',
        publishTime: '2026-04-28T12:35:00Z',
        content: '聽你這麼說，我下週上映第一天就要去買票支持！',
        likes: 14,
        dislikes: 0,
      },
    ],
  },
  {
    id: 'cm-a10-2',
    newsId: 'a10',
    author: '文藝青年',
    publishTime: '2026-04-28T13:00:00Z',
    content: '低成本卻有這麼高的完成度，真的給現在的電影工業上了一課。',
    likes: 42,
    dislikes: 1,
  },
  {
    id: 'cm-a10-3',
    newsId: 'a10',
    author: '爆米花愛好者',
    publishTime: '2026-04-28T13:30:00Z',
    content: '看預告片就覺得質感很好，期待在電影院大螢幕觀賞的震撼感。',
    likes: 29,
    dislikes: 3,
  },

  // ==========================================
  // a11: NBA 季後賽開打 (2 comments)
  // ==========================================
  {
    id: 'cm-a11-1',
    newsId: 'a11',
    author: '籃球魂',
    publishTime: '2026-04-28T08:00:00Z',
    content: '這場黑馬打得太有韌性了，防守端完全限制了衛冕軍的發揮。',
    likes: 26,
    dislikes: 1,
  },
  {
    id: 'cm-a11-2',
    newsId: 'a11',
    author: '死忠球迷',
    publishTime: '2026-04-28T08:20:00Z',
    content: '衛冕軍下一場一定要調整狀態，不能再這麼輕敵了，加油！',
    likes: 18,
    dislikes: 0,
  },

  // ==========================================
  // a12: 宋慧喬黑暗榮耀導演合作 (3 comments)
  // ==========================================
  {
    id: 'cm-a12-1',
    newsId: 'a12',
    author: '追劇少女',
    publishTime: '2026-04-27T10:30:00Z',
    content: '《黑暗榮耀》超級好看！如果這對黃金組合再合作，我絕對熬夜追完！',
    likes: 95,
    dislikes: 2,
    replies: [
      {
        id: 'r-a12-1',
        newsId: 'a12',
        author: '韓劇狂粉',
        publishTime: '2026-04-27T10:35:00Z',
        content: '我也是！宋慧喬的演技在新劇裡一定又會有新突破。',
        likes: 31,
        dislikes: 0,
      },
    ],
  },
  {
    id: 'cm-a12-2',
    newsId: 'a12',
    author: '懸疑控',
    publishTime: '2026-04-27T11:00:00Z',
    content: '只要是驚悚懸疑題材我都愛，希望劇本能維持一貫的高水準。',
    likes: 47,
    dislikes: 1,
  },

  // ==========================================
  // a13: 金曲獎入圍名單 (2 comments)
  // ==========================================
  {
    id: 'cm-a13-1',
    newsId: 'a13',
    author: '音樂發燒友',
    publishTime: '2026-04-26T16:00:00Z',
    content: '這位新人的歌真的很有特色，入圍實至名歸，看好他奪獎！',
    likes: 33,
    dislikes: 0,
  },
  {
    id: 'cm-a13-2',
    newsId: 'a13',
    author: '金曲預測家',
    publishTime: '2026-04-26T16:30:00Z',
    content:
      '今年競爭太激烈了，好多優秀的獨立音樂人都入圍了，非常期待頒獎典禮。',
    likes: 21,
    dislikes: 1,
  },

  // ==========================================
  // a14: 模範夫妻驚傳離婚 (4 comments)
  // ==========================================
  {
    id: 'cm-a14-1',
    newsId: 'a14',
    author: '吃瓜大眾',
    publishTime: '2026-04-28T15:00:00Z',
    content: '十年的感情說散就散，演藝圈的誘惑真的太多了，唉。',
    likes: 156,
    dislikes: 8,
    replies: [
      {
        id: 'r-a14-1',
        newsId: 'a14',
        author: '理性吃瓜',
        publishTime: '2026-04-28T15:05:00Z',
        content: '和平分手也是一種成熟的表現，祝他們未來各自安好吧。',
        likes: 67,
        dislikes: 2,
      },
    ],
  },
  {
    id: 'cm-a14-2',
    newsId: 'a14',
    author: '童話破滅',
    publishTime: '2026-04-28T15:30:00Z',
    content: '連他們都離婚了，我真的再也不相信愛情了...',
    likes: 89,
    dislikes: 15,
  },
  {
    id: 'cm-a14-3',
    newsId: 'a14',
    author: '支持者',
    publishTime: '2026-04-28T16:00:00Z',
    content: '希望媒體能給他們和小孩多一點空間，不要過度打擾他們的生活。',
    likes: 112,
    dislikes: 3,
  },

  // ==========================================
  // a15: 北京車展純電跑車 (2 comments)
  // ==========================================
  {
    id: 'cm-a15-1',
    newsId: 'a15',
    author: '科技宅',
    publishTime: '2026-04-27T09:40:00Z',
    content: '續航破千公里太猛了吧！如果真的能量產，電動車的焦慮就完全解決了。',
    likes: 48,
    dislikes: 1,
  },
  {
    id: 'cm-a15-2',
    newsId: 'a15',
    author: '汽車發燒友',
    publishTime: '2026-04-27T10:10:00Z',
    content: '固態電池技術看來是未來的趨勢，傳統車廠再不加速轉型就危險了。',
    likes: 29,
    dislikes: 0,
  },

  // ==========================================
  // a16: 中職大巨蛋首戰創紀錄 (3 comments)
  // ==========================================
  {
    id: 'cm-a16-1',
    newsId: 'a16',
    author: '棒球狂熱',
    publishTime: '2026-04-26T21:30:00Z',
    content: '現場4萬人齊聲吶喊的感覺真的太震撼了！大巨蛋看球體驗一級棒！',
    likes: 167,
    dislikes: 2,
    replies: [
      {
        id: 'r-a16-1',
        newsId: 'a16',
        author: '資深球迷',
        publishTime: '2026-04-26T21:35:00Z',
        content: '沒錯！台灣棒球終於有這麼棒的室內場地了，再也不怕下雨延賽了。',
        likes: 89,
        dislikes: 0,
      },
    ],
  },
  {
    id: 'cm-a16-2',
    newsId: 'a16',
    author: '熱血小飛',
    publishTime: '2026-04-26T22:00:00Z',
    content: '最後的再見全壘打簡真是完美的劇本，昨晚激動到睡不著覺！',
    likes: 120,
    dislikes: 1,
  },

  // ==========================================
  // a17: 全台5大賞花秘境 (2 comments)
  // ==========================================
  {
    id: 'cm-a17-1',
    newsId: 'a17',
    author: '旅遊打卡',
    publishTime: '2026-04-25T12:00:00Z',
    content: '這篇整理得太實用了！週末剛好可以帶全家人去苗栗看紫藤花。',
    likes: 25,
    dislikes: 0,
  },
  {
    id: 'cm-a17-2',
    newsId: 'a17',
    author: '攝影愛好者',
    publishTime: '2026-04-25T12:30:00Z',
    content:
      '賞花秘境最怕人擠人，希望大家去的時候能好好愛惜環境，不要亂丟垃圾。',
    likes: 44,
    dislikes: 1,
  },

  // ==========================================
  // a18: 漫威新英雄曝光 (3 comments)
  // ==========================================
  {
    id: 'cm-a18-1',
    newsId: 'a18',
    author: '漫威迷',
    publishTime: '2026-04-28T17:00:00Z',
    content:
      '希望能有新的火花，最近幾部漫威電影感覺有點疲軟，期待這位傳奇影星！',
    likes: 72,
    dislikes: 3,
    replies: [
      {
        id: 'r-a18-1',
        newsId: 'a18',
        author: '電影愛好者',
        publishTime: '2026-04-28T17:05:00Z',
        content: '同感，希望劇本能寫得扎實一點，不要浪費了這麼好的演員。',
        likes: 28,
        dislikes: 1,
      },
    ],
  },
  {
    id: 'cm-a18-2',
    newsId: 'a18',
    author: '猜測大師',
    publishTime: '2026-04-28T17:30:00Z',
    content: '看網傳的片場照，感覺很有可能是演某個經典宇宙反派，超級期待！',
    likes: 51,
    dislikes: 2,
  },

  // ==========================================
  // a19: Netflix 5月新片單 (2 comments)
  // ==========================================
  {
    id: 'cm-a19-1',
    newsId: 'a19',
    author: '劇荒救星',
    publishTime: '2026-04-27T18:30:00Z',
    content: '這片單太強了！我的假日起床動力又來了，已經準備好爆米花。',
    likes: 38,
    dislikes: 0,
  },
  {
    id: 'cm-a19-2',
    newsId: 'a19',
    author: '追劇小能手',
    publishTime: '2026-04-27T19:00:00Z',
    content: '校園懸疑劇第二季終於要播了，第一季的懸念拖了一整年，等得好辛苦！',
    likes: 62,
    dislikes: 1,
  },

  // ==========================================
  // a20: 2026地方大選 (4 comments)
  // ==========================================
  {
    id: 'cm-a20-1',
    newsId: 'a20',
    author: '選民甲',
    publishTime: '2026-04-28T07:00:00Z',
    content: '民調只是參考，最重要還是要看候選人實際提出了什麼政策和政績。',
    likes: 189,
    dislikes: 5,
    replies: [
      {
        id: 'r-a20-1',
        newsId: 'a20',
        author: '關心時事',
        publishTime: '2026-04-28T07:05:00Z',
        content: '同意！希望大家理性思考，不要被煽動，投下神聖的一票。',
        likes: 92,
        dislikes: 1,
      },
    ],
  },
  {
    id: 'cm-a20-2',
    newsId: 'a20',
    author: '青年力量',
    publishTime: '2026-04-28T07:30:00Z',
    content: '這次選舉年輕選民的投票率很關鍵，大家一定要站出來表達自己的聲音！',
    likes: 143,
    dislikes: 4,
  },
  {
    id: 'cm-a20-3',
    newsId: 'a20',
    author: '中立觀察',
    publishTime: '2026-04-28T08:00:00Z',
    content: '戰況真的很膠著，不到最後一刻都很難說誰會勝出，考驗各政黨的智慧。',
    likes: 76,
    dislikes: 2,
  },
];
