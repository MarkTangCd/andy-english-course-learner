const list = [
  {
    id: 1,
    english: "I am a blue-collar worker",
    chinese: "我是一个蓝领工人",
  },
  {
    id: 2,
    english: "I'm not a bank teller",
    chinese: "我不是银行出纳",
  },
  {
    id: 3,
    english: "He is not a lead researcher",
    chinese: "他不是首席研究员",
  },
  {
    id: 4,
    english: "The hotpot restaurant hasn't got any tables available tonight",
    chinese: "火锅店今晚没有空桌了",
  },
  {
    id: 5,
    english: "He has a Jeep Wrangler",
    chinese: "他有一辆吉普牧马人",
  },
  {
    id: 6,
    english: "She has a pair of running shoes",
    chinese: "她有一双跑鞋",
  },
  {
    id: 7,
    english: "She doesn't have any siblings",
    chinese: "她没有兄弟姐妹",
  },
  {
    id: 8,
    english: "He doesn't have enough work experience",
    chinese: "他没有足够的工作经验",
  },
  {
    id: 9,
    english: "I have a pet dog",
    chinese: "我有一只宠物狗",
  },
  {
    id: 10,
    english: "Jack has a vintage motorbike",
    chinese: "杰克有一辆老式摩托车",
  },
  {
    id: 11,
    english: "They have a set of camping gear",
    chinese: "他们有一套露营装备",
  },
  {
    id: 12,
    english: "I haven't got a washing machine",
    chinese: "我没有洗衣机",
  },
  {
    id: 13,
    english: "He doesn't have a mop",
    chinese: "他没有拖把",
  },
  {
    id: 14,
    english: "They haven't got a printer",
    chinese: "他们没有打印机",
  },
  {
    id: 15,
    english: "The entry-level DSLR has many useful features",
    chinese: "入门级单反相机有许多有用的功能",
  },
  {
    id: 16,
    english: "It has a high-resolution sensor",
    chinese: "它有一个高分辨率的传感器",
  },
  {
    id: 17,
    english: "I can't wait for our next off-road adventure",
    chinese: "我等不及我们的下一次越野冒险了",
  },
  {
    id: 18,
    english:
      "Did you used to live in the city? I remember you telling me how much you loved the hustle and bustle of urban life",
    chinese: "你以前住在城里吗?我记得你告诉我你多么喜欢城市生活的喧嚣",
  },
  {
    id: 19,
    english: "Did you use to have long hair?",
    chinese: "你以前留长头发吗?",
  },
  {
    id: 20,
    english: "Did he used to be a mechanic?",
    chinese: "他以前是个机械师吗?",
  },
  {
    id: 21,
    english: "Did your Land Rover used to be your pride and joy?",
    chinese: "你的路虎曾经是你的骄傲和快乐吗?",
  },
  {
    id: 22,
    english: "The snack bar doesn't have any vegetarian options on the menu.",
    chinese: "小吃店的菜单上没有任何素食选择",
  },
  {
    id: 23,
    english: "He is 30 years old now",
    chinese: "他现在30岁了",
  },
  {
    id: 24,
    english:
      "The single dad doesn't have the patience to deal with his child's tantrums today",
    chinese: "单亲爸爸今天没有耐心处理孩子的发脾气",
  },
  {
    id: 25,
    english: "Would you help me with setting up this tent?",
    chinese: "你能帮我搭这个帐篷吗?",
  },
  {
    id: 26,
    english: "Her age is over twenty",
    chinese: "她的年龄超过20岁",
  },
  {
    id: 27,
    english:
      "I'm not a tech-savvy person. Would you help me with setting up my new laptop?",
    chinese: "我不是一个精通技术的人。你能帮我安装我的新笔记本电脑吗?",
  },
  {
    id: 28,
    english: "Would you do me a favour?",
    chinese: "你能帮我一个忙吗?",
  },
  {
    id: 29,
    english: "She is one hundred and 60 centimetres tall",
    chinese: "她身高160厘米",
  },
  {
    id: 30,
    english:
      "How far is it from here to the laboratory apparatus wholesale market?",
    chinese: "从这里到实验仪器批发市场有多远?",
  },
  {
    id: 31,
    english: "blue-collar worker",
    chinese: "蓝领工人；体力劳动者；",
  },
  {
    id: 32,
    english: "pet dog",
    chinese: "宠物狗",
  },
  {
    id: 33,
    english: "running shoes",
    chinese: "跑步鞋",
  },
  {
    id: 34,
    english: "lead researcher",
    chinese: "首席研究员",
  },
  {
    id: 35,
    english: "bank teller",
    chinese: "银行柜员",
  },
  {
    id: 36,
    english: "available",
    chinese: "可获得的；可得到的；",
  },
  {
    id: 37,
    english: "camping gear",
    chinese: "露营装备",
  },
  {
    id: 38,
    english: "washing machine",
    chinese: "洗衣机",
  },
  {
    id: 39,
    english: "mop",
    chinese: "拖把",
  },
  {
    id: 40,
    english: "DSLR",
    chinese: "数码单反相机",
  },
  {
    id: 41,
    english: "high-resolution sensor",
    chinese: "高分辨率传感器",
  },
  {
    id: 42,
    english: "resolution",
    chinese: "（电视、照相机、显微镜等的）清晰度，分辨率；决议；决心",
  },
  {
    id: 43,
    english: "SUV",
    chinese: "越野车；运动型多功能汽车",
  },
  {
    id: 44,
    english: "off-road adventure",
    chinese: "越野冒险；越野探险",
  },
  {
    id: 45,
    english: "off-road",
    chinese: "越野的",
  },
  {
    id: 46,
    english: "used to",
    chinese: "过去经常",
  },
  {
    id: 47,
    english: "the hustle and bustle",
    chinese: "喧嚣气氛",
  },
  {
    id: 48,
    english: "urban life",
    chinese: "城市生活",
  },
  {
    id: 49,
    english: "long hair",
    chinese: "长发",
  },
  {
    id: 50,
    english: "mechanic",
    chinese: "机械工；机修工",
  },
  {
    id: 51,
    english: "pride and joy",
    chinese: "骄傲和欢乐",
  },
  {
    id: 52,
    english: "land rover",
    chinese: "路虎（汽车品牌）",
  },
  {
    id: 53,
    english: "rover",
    chinese: "漫游者；流浪者",
  },
  {
    id: 54,
    english: "centimetre",
    chinese: "厘米，公分",
  },
  {
    id: 55,
    english: "vegetarian options",
    chinese: "素食选择",
  },
  {
    id: 56,
    english: "menu",
    chinese: "菜单",
  },
  {
    id: 57,
    english: "deal with",
    chinese: "克服；处理",
  },
  {
    id: 58,
    english: "patience",
    chinese: "耐心",
  },
  {
    id: 59,
    english: "tantrum",
    chinese: "发脾气；发怒；",
  },
  {
    id: 60,
    english: "set up the tent",
    chinese: "搭帐篷",
  },
  {
    id: 61,
    english: "tech-savvy",
    chinese: "精通技术的",
  },
  {
    id: 62,
    english: "laptop",
    chinese: "笔记本电脑",
  },
  {
    id: 63,
    english: "favour",
    chinese: "喜爱，支持；恩惠",
  },
  {
    id: 64,
    english: "gangster",
    chinese: "(结成团伙的) 匪徒",
  },
  {
    id: 65,
    english: "laboratory apparatus",
    chinese: "实验室用仪器；实验室器械",
  },
  {
    id: 66,
    english: "wholesale market",
    chinese: "批发市场",
  },
  {
    id: 67,
    english: "intruder",
    chinese: "闯入者，侵入者",
  },
  {
    id: 68,
    english: "treasure",
    chinese: "金银财宝",
  },
  {
    id: 69,
    english: "repent",
    chinese: "后悔；忏悔",
  },
  {
    id: 70,
    english: "snare",
    chinese: "用罗网捕捉；(捕捉鸟或小动物的) 罗网",
  },
  {
    id: 71,
    english: "redeem",
    chinese: "挽回声誉；改善形象；弥补；补救",
  },
  {
    id: 72,
    english: "rig",
    chinese: "（秘密地）安装，装配；(欺骗性地) 幕后操纵；钻塔",
  },
  {
    id: 73,
    english: "plunder",
    chinese: "掠夺",
  },
  {
    id: 74,
    english: "hamlet",
    chinese: "小村庄",
  },
  {
    id: 75,
    english: "grateful",
    chinese: "感激的",
  },
  {
    id: 76,
    english: "peaceful",
    chinese: "宁静的；和平的",
  },
  {
    id: 77,
    english: "country dweller",
    chinese: "农村居民",
  },
  {
    id: 78,
    english: "robber",
    chinese: "强盗，抢劫犯",
  },
  {
    id: 79,
    english: "plausible",
    chinese: "(人) 看似可信的；(解释或叙述) 看似合理的",
  },
  {
    id: 80,
    english: "village chief",
    chinese: "村长",
  },
  {
    id: 81,
    english: "dweller",
    chinese: "居民，居住者",
  },
  {
    id: 82,
    english: "prohibit",
    chinese: "（通过法律、条例等）禁止",
  },
  {
    id: 83,
    english: "picturesque",
    chinese: "风景如画的",
  },
  {
    id: 84,
    english: "From that day on",
    chinese: "从那天起",
  },
  {
    id: 85,
    english: "Arcadia",
    chinese: "世外桃源；阿卡狄亚（古希腊一山区，人情淳朴，生活愉快）",
  },
  {
    id: 86,
    english: "Fiji",
    chinese: "斐济（太平洋西南部的岛国，在新西兰之北，首都苏瓦）",
  },
];

const data = {
  id: 1,
  name: "14-1",
  audio: ["14期1课1-30句子.mp3", "14期1课(单词).mp3"],
  list,
};

export default data;
