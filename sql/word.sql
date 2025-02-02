CREATE TABLE IF NOT EXISTS "public"."word" (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  course_id INTEGER NOT NULL,
  english TEXT UNIQUE NOT NULL,
  chinese TEXT NOT NULL,
  FOREIGN KEY ("course_id") REFERENCES "public"."course"(id)
);

-- lesson 14-1
INSERT INTO "public"."word" (course_id, english, chinese) VALUES
(1, 'I am a blue-collar worker', '我是一个蓝领工人'),
(1, 'I''m not a bank teller', '我不是银行出纳'),
(1, 'He is not a lead researcher', '他不是首席研究员'),
(1, 'The hotpot restaurant hasn''t got any tables available tonight', '火锅店今晚没有空桌了'),
(1, 'He has a Jeep Wrangler', '他有一辆吉普牧马人'),
(1, 'She has a pair of running shoes', '她有一双跑鞋'),
(1, 'She doesn''t have any siblings', '她没有兄弟姐妹'),
(1, 'He doesn''t have enough work experience', '他没有足够的工作经验'),
(1, 'I have a pet dog', '我有一只宠物狗'),
(1, 'Jack has a vintage motorbike', '杰克有一辆老式摩托车'),
(1, 'They have a set of camping gear', '他们有一套露营装备'),
(1, 'I haven''t got a washing machine', '我没有洗衣机'),
(1, 'He doesn''t have a mop', '他没有拖把'),
(1, 'They haven''t got a printer', '他们没有打印机'),
(1, 'The entry-level DSLR has many useful features', '入门级单反相机有许多有用的功能'),
(1, 'It has a high-resolution sensor', '它有一个高分辨率的传感器'),
(1, 'I can''t wait for our next off-road adventure', '我等不及我们的下一次越野冒险了'),
(1, 'Did you used to live in the city? I remember you telling me how much you loved the hustle and bustle of urban life', '你以前住在城里吗?我记得你告诉我你多么喜欢城市生活的喧嚣'),
(1, 'Did you use to have long hair?', '你以前留长头发吗?'),
(1, 'Did he used to be a mechanic?', '他以前是个机械师吗?'),
(1, 'Did your Land Rover used to be your pride and joy?', '你的路虎曾经是你的骄傲和快乐吗?'),
(1, 'The snack bar doesn''t have any vegetarian options on the menu.', '小吃店的菜单上没有任何素食选择'),
(1, 'He is 30 years old now', '他现在30岁了'),
(1, 'The single dad doesn''t have the patience to deal with his child''s tantrums today', '单亲爸爸今天没有耐心处理孩子的发脾气'),
(1, 'Would you help me with setting up this tent?', '你能帮我搭这个帐篷吗?'),
(1, 'Her age is over twenty', '她的年龄超过20岁'),
(1, 'I''m not a tech-savvy person. Would you help me with setting up my new laptop?', '我不是一个精通技术的人。你能帮我安装我的新笔记本电脑吗?'),
(1, 'Would you do me a favour?', '你能帮我一个忙吗?'),
(1, 'She is one hundred and 60 centimetres tall', '她身高160厘米'),
(1, 'How far is it from here to the laboratory apparatus wholesale market?', '从这里到实验仪器批发市场有多远?'),
(1, 'blue-collar worker', '蓝领工人；体力劳动者；'),
(1, 'pet dog', '宠物狗'),
(1, 'running shoes', '跑步鞋'),
(1, 'lead researcher', '首席研究员'),
(1, 'bank teller', '银行柜员'),
(1, 'available', '可获得的；可得到的；'),
(1, 'camping gear', '露营装备'),
(1, 'washing machine', '洗衣机'),
(1, 'mop', '拖把'),
(1, 'DSLR', '数码单反相机'),
(1, 'high-resolution sensor', '高分辨率传感器'),
(1, 'resolution', '（电视、照相机、显微镜等的）清晰度，分辨率；决议；决心'),
(1, 'SUV', '越野车；运动型多功能汽车'),
(1, 'off-road adventure', '越野冒险；越野探险'),
(1, 'off-road', '越野的'),
(1, 'used to', '过去经常'),
(1, 'the hustle and bustle', '喧嚣气氛'),
(1, 'urban life', '城市生活'),
(1, 'long hair', '长发'),
(1, 'mechanic', '机械工；机修工'),
(1, 'pride and joy', '骄傲和欢乐'),
(1, 'land rover', '路虎（汽车品牌）'),
(1, 'rover', '漫游者；流浪者'),
(1, 'centimetre', '厘米，公分'),
(1, 'vegetarian options', '素食选择'),
(1, 'menu', '菜单'),
(1, 'deal with', '克服；处理'),
(1, 'patience', '耐心'),
(1, 'tantrum', '发脾气；发怒；'),
(1, 'set up the tent', '搭帐篷'),
(1, 'tech-savvy', '精通技术的'),
(1, 'laptop', '笔记本电脑'),
(1, 'favour', '喜爱，支持；恩惠'),
(1, 'gangster', '(结成团伙的) 匪徒'),
(1, 'laboratory apparatus', '实验室用仪器；实验室器械'),
(1, 'wholesale market', '批发市场'),
(1, 'intruder', '闯入者，侵入者'),
(1, 'treasure', '金银财宝'),
(1, 'repent', '后悔；忏悔'),
(1, 'snare', '用罗网捕捉；(捕捉鸟或小动物的) 罗网'),
(1, 'redeem', '挽回声誉；改善形象；弥补；补救'),
(1, 'rig', '（秘密地）安装，装配；(欺骗性地) 幕后操纵；钻塔'),
(1, 'plunder', '掠夺'),
(1, 'hamlet', '小村庄'),
(1, 'grateful', '感激的'),
(1, 'peaceful', '宁静的；和平的'),
(1, 'country dweller', '农村居民'),
(1, 'robber', '强盗，抢劫犯'),
(1, 'plausible', '(人) 看似可信的；(解释或叙述) 看似合理的'),
(1, 'village chief', '村长'),
(1, 'dweller', '居民，居住者'),
(1, 'prohibit', '（通过法律、条例等）禁止'),
(1, 'picturesque', '风景如画的'),
(1, 'From that day on', '从那天起'),
(1, 'Arcadia', '世外桃源；阿卡狄亚（古希腊一山区，人情淳朴，生活愉快）'),
(1, 'Fiji', '斐济（太平洋西南部的岛国，在新西兰之北，首都苏瓦）');

-- lesson 10-5
INSERT INTO "public"."word" (course_id, english, chinese) VALUES
(2, 'She resolved to avoid staying up late this year', '她决心今年不熬夜了'),
(2, 'The sportsman gained in stamina through rigorous training', '那位运动员通过严格的训练增强了耐力'),
(2, 'Indonesia', '印度尼西亚（东南亚岛国）'),
(2, 'overseas', '海外的'),
(2, 'complain', '抱怨'),
(2, 'buster', '小子；破坏某物的人'),
(2, 'picnic', '野餐；愉快事物'),
(2, 'innovator', '创新者'),
(2, 'inventor', '发明家'),
(2, 'maybe', '也许'),
(2, 'medicine', '药'),
(2, 'vaccine', '疫苗'),
(2, 'project', '项目，计划'),
(2, 'mayor', '市长'),
(2, 'senator', '参议员'),
(2, 'guarantee', '保证'),
(2, 'insights', '洞察力'),
(2, 'homelessness', '无家可归'),
(2, 'crime', '犯罪活动'),
(2, 'discrimination', '歧视，区别对待'),
(2, 'fair', '公平的'),
(2, 'neglect', '疏于照管；忽视'),
(2, 'extracurricular', '课外的；工作之外的'),
(2, 'volunteer', '志愿者'),
(2, 'stamina', '耐力；毅力'),
(2, 'tease', '嘲笑；取笑'),
(2, 'sportsman', '运动员'),
(2, 'bully', '欺负；恃强凌弱者，横行霸道者'),
(2, 'resolve', '下决心；解决'),
(2, 'commit', '（使）承诺，承担义务；犯（罪、错）'),
(2, 'click', '（用鼠标）点击；发出咔嗒声'),
(2, 'assignment', '任务；作业'),
(2, 'relevant', '相关的'),
(2, 'varsity', '（尤指体育比赛中大中学校的）代表队，校队'),
(2, 'note', '音符；便条'),
(2, 'principle', '原理；原则'),
(2, 'schoolwork', '学校作业'),
(2, 'discourage', '使气馁'),
(2, 'live overseas', '在海外生活'),
(2, 'keep up with', '跟上；跟进'),
(2, 'no picnic', '困难或不愉快的事情'),
(2, 'single mom', '单身妈妈'),
(2, 'at times', '有时候'),
(2, 'pay the bills', '支付帐单'),
(2, 'come up with', '想出，提出'),
(2, 'science class', '科学课'),
(2, 'Supreme Court justice', '最高法院大法官'),
(2, 'student union', '学生会'),
(2, 'student government', '学生政府'),
(2, 'debate team', '辩论队'),
(2, 'no matter', '不论；不管'),
(2, 'critical thinking skills', '批判性思维能力'),
(2, 'gain in', '在某方面取得进步或提高'),
(2, 'social studies', '社会学科'),
(2, 'fight poverty', '抗击贫困'),
(2, 'at the end of the day', '归根到底；最终'),
(2, 'make a decision', '做决定'),
(2, 'bad attitude', '不良态度'),
(2, 'talk back', '顶嘴'),
(2, 'cut class', '逃课'),
(2, 'drop out of school', '辍学'),
(2, 'there is no excuse for not trying', '没有任何理由不去尝试'),
(2, 'extracurricular activity', '课外活动'),
(2, 'get involved in', '卷入；参与'),
(2, 'stand up for', '支持，维护'),
(2, 'click with', '与……产生共鸣，与……合拍'),
(2, 'homework assignment', '家庭作业任务'),
(2, 'right at this minute', '在这一刻'),
(2, 'varsity athlete', '大学代表队运动员'),
(2, 'hit every note', '准确演奏每一个音符；完美达到每个要求'),
(2, 'sing a song', '唱歌'),
(2, 'applies to', '适用于'),
(2, 'give up on', '放弃对某事或某人的希望或努力'),
(2, 'get serious', '认真对待'),
(2, 'put into', '使用（一定的能量或努力）'),
(2, 'most of all', '最重要的是'),
(2, 'let down', '使失望'),
(2, 'staying up late', '熬夜'),
(2, 'resolved to', '决心做某事'),
(2, 'rigorous training', '严格训练');