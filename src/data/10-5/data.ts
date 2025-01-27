const list = [
  {
    id: 1,
    english: "She resolved to avoid staying up late this year",
    chinese: "她决心今年不熬夜了",
  },
  {
    id: 2,
    english: "The sportsman gained in stamina through rigorous training",
    chinese: "那位运动员通过严格的训练增强了耐力",
  },
  {
    id: 3,
    english: "Indonesia",
    chinese: "印度尼西亚（东南亚岛国）",
  },
  {
    id: 4,
    english: "overseas",
    chinese: "海外的",
  },
  {
    id: 5,
    english: "complain",
    chinese: "抱怨",
  },
  {
    id: 6,
    english: "buster",
    chinese: "小子；破坏某物的人",
  },
  {
    id: 7,
    english: "picnic",
    chinese: "野餐；愉快事物",
  },
  {
    id: 8,
    english: "innovator",
    chinese: "创新者",
  },
  {
    id: 9,
    english: "inventor",
    chinese: "发明家",
  },
  {
    id: 10,
    english: "maybe",
    chinese: "也许",
  },
  {
    id: 11,
    english: "medicine",
    chinese: "药",
  },
  {
    id: 12,
    english: "vaccine",
    chinese: "疫苗",
  },
  {
    id: 13,
    english: "project",
    chinese: "项目，计划",
  },
  {
    id: 14,
    english: "mayor",
    chinese: "市长",
  },
  {
    id: 15,
    english: "senator",
    chinese: "参议员",
  },
  {
    id: 16,
    english: "guarantee",
    chinese: "保证",
  },
  {
    id: 17,
    english: "insights",
    chinese: "洞察力",
  },
  {
    id: 18,
    english: "homelessness",
    chinese: "无家可归",
  },
  {
    id: 19,
    english: "crime",
    chinese: "犯罪活动",
  },
  {
    id: 20,
    english: "discrimination",
    chinese: "歧视，区别对待",
  },
  {
    id: 21,
    english: "fair",
    chinese: "公平的",
  },
  {
    id: 22,
    english: "neglect",
    chinese: "疏于照管；忽视",
  },
  {
    id: 23,
    english: "extracurricular",
    chinese: "课外的；工作之外的",
  },
  {
    id: 24,
    english: "volunteer",
    chinese: "志愿者",
  },
  {
    id: 25,
    english: "stamina",
    chinese: "耐力；毅力",
  },
  {
    id: 26,
    english: "tease",
    chinese: "嘲笑；取笑",
  },
  {
    id: 27,
    english: "sportsman",
    chinese: "运动员",
  },
  {
    id: 28,
    english: "bully",
    chinese: "欺负；恃强凌弱者，横行霸道者",
  },
  {
    id: 29,
    english: "resolve",
    chinese: "下决心；解决",
  },
  {
    id: 30,
    english: "commit",
    chinese: "（使）承诺，承担义务；犯（罪、错）",
  },
  {
    id: 31,
    english: "click",
    chinese: "（用鼠标）点击；发出咔嗒声",
  },
  {
    id: 32,
    english: "assignment",
    chinese: "任务；作业",
  },
  {
    id: 33,
    english: "relevant",
    chinese: "相关的",
  },
  {
    id: 34,
    english: "varsity",
    chinese: "（尤指体育比赛中大中学校的）代表队，校队",
  },
  {
    id: 35,
    english: "note",
    chinese: "音符；便条",
  },
  {
    id: 36,
    english: "principle",
    chinese: "原理；原则",
  },
  {
    id: 37,
    english: "schoolwork",
    chinese: "学校作业",
  },
  {
    id: 38,
    english: "discourage",
    chinese: "使气馁",
  },
  {
    id: 39,
    english: "live overseas",
    chinese: "在海外生活",
  },
  {
    id: 40,
    english: "keep up with",
    chinese: "跟上；跟进",
  },
  {
    id: 41,
    english: "no picnic",
    chinese: "困难或不愉快的事情",
  },
  {
    id: 42,
    english: "single mom",
    chinese: "单身妈妈",
  },
  {
    id: 43,
    english: "at times",
    chinese: "有时候",
  },
  {
    id: 44,
    english: "pay the bills",
    chinese: "支付帐单",
  },
  {
    id: 45,
    english: "come up with",
    chinese: "想出，提出",
  },
  {
    id: 46,
    english: "science class",
    chinese: "科学课",
  },
  {
    id: 47,
    english: "Supreme Court justice",
    chinese: "最高法院大法官",
  },
  {
    id: 48,
    english: "student union",
    chinese: "学生会",
  },
  {
    id: 49,
    english: "student government",
    chinese: "学生政府",
  },
  {
    id: 50,
    english: "debate team",
    chinese: "辩论队",
  },
  {
    id: 51,
    english: "no matter",
    chinese: "不论；不管",
  },
  {
    id: 52,
    english: "critical thinking skills",
    chinese: "批判性思维能力",
  },
  {
    id: 53,
    english: "gain in",
    chinese: "在某方面取得进步或提高",
  },
  {
    id: 54,
    english: "social studies",
    chinese: "社会学科",
  },
  {
    id: 55,
    english: "fight poverty",
    chinese: "抗击贫困",
  },
  {
    id: 56,
    english: "at the end of the day",
    chinese: "归根到底；最终",
  },
  {
    id: 57,
    english: "make a decision",
    chinese: "做决定",
  },
  {
    id: 58,
    english: "bad attitude",
    chinese: "不良态度",
  },
  {
    id: 59,
    english: "talk back",
    chinese: "顶嘴",
  },
  {
    id: 60,
    english: "cut class",
    chinese: "逃课",
  },
  {
    id: 61,
    english: "drop out of school",
    chinese: "辍学",
  },
  {
    id: 62,
    english: "there is no excuse for not trying",
    chinese: "没有任何理由不去尝试",
  },
  {
    id: 63,
    english: "extracurricular activity",
    chinese: "课外活动",
  },
  {
    id: 64,
    english: "get involved in",
    chinese: "卷入；参与",
  },
  {
    id: 65,
    english: "stand up for",
    chinese: "支持，维护",
  },
  {
    id: 66,
    english: "click with",
    chinese: "与……产生共鸣，与……合拍",
  },
  {
    id: 67,
    english: "homework assignment",
    chinese: "家庭作业任务",
  },
  {
    id: 68,
    english: "right at this minute",
    chinese: "在这一刻",
  },
  {
    id: 69,
    english: "varsity athlete",
    chinese: "大学代表队运动员",
  },
  {
    id: 70,
    english: "hit every note",
    chinese: "准确演奏每一个音符；完美达到每个要求",
  },
  {
    id: 71,
    english: "sing a song",
    chinese: "唱歌",
  },
  {
    id: 72,
    english: "applies to",
    chinese: "适用于",
  },
  {
    id: 73,
    english: "give up on",
    chinese: "放弃对某事或某人的希望或努力",
  },
  {
    id: 74,
    english: "get serious",
    chinese: "认真对待",
  },
  {
    id: 75,
    english: "put into",
    chinese: "使用（一定的能量或努力）",
  },
  {
    id: 76,
    english: "most of all",
    chinese: "最重要的是",
  },
  {
    id: 77,
    english: "let down",
    chinese: "使失望",
  },
  {
    id: 78,
    english: "staying up late",
    chinese: "熬夜",
  },
  {
    id: 79,
    english: "resolved to",
    chinese: "决心做某事",
  },
  {
    id: 80,
    english: "rigorous training",
    chinese: "严格训练",
  },
];

const data = {
  id: 2,
  name: "10-5",
  audio: [
    "地道口语第十期第5课(正文mp3).mp3",
    "地口第十期第5课(句子单词mp3).mp3",
  ],
  list,
};

export default data;
