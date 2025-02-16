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

-- lesson 1-1
INSERT INTO "public"."word" (course_id, english, chinese) VALUES
(3, 'You don''t look too well today', '你今天看起来气色不太好'),
(3, 'You don''t look like you''re in the mood for small talk today', '你今天看起来没心情闲聊'),
(3, 'I am having some trouble right now', '我现在遇到了一些麻烦'),
(3, 'What''s wrong?', '怎么了？怎么啦？'),
(3, 'I gotta pay my rent to the landlord before tonight', '我得在今晚之前把房租交给房东'),
(3, 'What can I help you with?', '我能帮你什么忙吗?'),
(3, 'You are a lifesaver', '你真是救命恩人；你真是个大救星啊；'),
(3, 'It''s nothing', '小事情；没什么；不足挂齿；'),
(3, 'I should probably get back to my place and pack some stuff', '我可能应该回家打包点东西；'),
(3, 'I need to pack up my stuff for the event next week', '我得为下周的活动收拾行李'),
(3, 'You''re too nice', '你太好了！'),
(3, 'What are friends for?', '朋友就该相互支持；朋友是用来做什么的；'),
(3, 'Thank you again', '再次感谢'),
(3, 'I really appreciate it', '我真的很感激'),
(3, 'Oh, hush', '嘘；别说话；'),
(3, 'We are going to have so much fun', '我们将会玩得很开心'),
(3, 'I will see you in an hour', '一小时后见'),
(3, 'The boutique offers a wide array of clothing styles', '这家精品店提供各种款式的服装'),
(3, 'I can''t wait to see you at the wedding tomorrow', '我等不及要在明天的婚礼上见到你'),
(3, 'So let me not ramble and let''s just get into it', '我就不闲扯了，直接切入正题吧；'),
(3, 'He can ramble on for hours without taking a breath', '他可以滔滔不绝地说上几个小时而不喘气'),
(3, 'This smartphone offers not just a high-pixel camera, but also exceptional battery life.', '这款智能手机不仅有高像素摄像头，还有超长的电池寿命。'),
(3, 'I''m not sure', '我不太确定；'),
(3, 'The unexpected twist in the movie''s plot made a splash among the viewers', '电影情节的意外转折在观众中引起了轰动'),
(3, 'Traveling during the National Day holiday was a nightmare, and you can say that again.', '我完全同意！国庆出游简直是一场噩梦；'),
(3, 'How long will it take to finish this project? Your guess is as good as mine.', 'A: 完成这个项目需要多长时间? B: 我和你一样也不知道。'),
(3, 'The limited edition sneakers sold like hotcakes', '限量版运动鞋卖得很好'),
(3, 'The manager had to put up with the customer''s ranting and raving about the product''s defects', '经理不得不忍受顾客对产品缺陷的抱怨'),
(3, 'The real estate agent''s track record speaks for itself', '这位房地产经纪人的业绩记录说明了一切'),
(3, 'The wedding planner promised to foot the bill for the entire wedding dress photoshoot', '婚礼策划师答应支付整个婚纱拍摄的费用'),
(3, 'The factory can crank out hundreds of thousands of mooncakes in a short timeframe', '这家工厂可以在短时间内生产几十万个月饼'),
(3, 'small talk', '闲聊'),
(3, 'in the mood for', '有心情去做'),
(3, 'before tonight', '今晚之前'),
(3, 'pay the rent', '交房租'),
(3, 'Oh, sure', '哦，当然'),
(3, 'pack up', '收拾行李，整理行装'),
(3, 'guest room', '客房'),
(3, 'Don''t worry about it', '别担心；别着急'),
(3, 'diving into', '深入探究'),
(3, 'wide array', '广泛的选择或范围'),
(3, 'boutique store', '精品店'),
(3, 'clothing style', '服装风格'),
(3, 'multiple choice', '多项选择；多选题'),
(3, 'single choice', '单选题'),
(3, 'ramble on', '闲扯，胡言乱语'),
(3, 'take a breath', '停下来休息一下；喘口气'),
(3, 'high pixel', '高像素，高像素的'),
(3, 'marketing product', '推销产品，营销产品'),
(3, 'take down', '拆卸或摘下；打倒或击败'),
(3, 'call out', '公开指责或批评；呼叫或召唤某人'),
(3, 'made a splash', '引起轰动'),
(3, 'You can say that again', '你说得对；我完全同意'),
(3, 'Your guess is as good as mine', '我和你一样也不知道'),
(3, 'sell like hotcakes', '畅销'),
(3, 'limited edition', '限量版'),
(3, 'put up with', '忍受；容忍'),
(3, 'rant and rave', '怒吼抱怨；大声叫嚷'),
(3, 'track record', '(个人、公司或产品的) 业绩记录；过去的成绩或成就'),
(3, 'real estate agent', '房产中介'),
(3, 'speak for itself', '不言而喻'),
(3, 'foot the bill', '付账'),
(3, 'wedding planner', '婚礼策划师'),
(3, 'wedding dress', '婚纱'),
(3, 'crank out', '大规模生产；快速制造'),
(3, 'hundreds of thousands of', '数十万'),
(3, 'in a short timeframe', '在很短的时间内'),
(3, 'twist', '波折；意想不到的转折'),
(3, 'plot', '阴谋，密谋；情节'),
(3, 'viewer', '观众'),
(3, 'nightmare', '噩梦'),
(3, 'hotcake', '薄煎饼；烤饼'),
(3, 'sneaker', '球鞋，运动鞋'),
(3, 'defect', '缺陷'),
(3, 'mooncake', '月饼'),
(3, 'rant', '咆哮；叫嚷'),
(3, 'rave', '咆哮，怒吼'),
(3, 'array', '大量；陈列'),
(3, 'photoshoot', '拍摄活动'),
(3, 'timeframe', '时间表；时间框架');

-- lesson 1-2
INSERT INTO "public"."word" (course_id, english, chinese) VALUES
(4, 'Hey, do you know a good coffee place nearby?', '嘿，你知道附近有好的咖啡店吗?'),
(4, 'They''re the team who nailed it and won the championship last year', '他们就是去年赢得冠军的那支球队'),
(4, 'He nailed the interview and scored the job right away', '他面试成功了，立刻得到了那份工作。'),
(4, 'She is very good-looking', '她长得很漂亮'),
(4, 'When did she join our company？', '她什么时候加入我们公司的?'),
(4, 'Why didn''t I know?', '为什么我不知道?'),
(4, 'Tomorrow, I''m gonna take the day off to enroll my kid in school', '明天，我准备请一天假去学校给我小孩报名；'),
(4, 'What are her characteristics?', '她的特点是什么?'),
(4, 'She is very intelligent and friendly', '她非常聪明和友好'),
(4, 'Upon arriving in a foreign country, I tried to get acquainted with my local American classmates.', '一到国外，我就努力去结识当地的美国同学。'),
(4, 'You should do that', '你应该这样做；'),
(4, 'No joke', '不是开玩笑；'),
(4, 'I got my hands on the vintage vinyl record I''ve been searching for', '我找到了我一直在找的黑胶唱片'),
(4, 'They spent about two thrilling days exploring, sailing, driving, fishing, diving, cooking, flying, and digging.', '他们嗨了两天来探险、航海、开车、钓鱼、潜水、烹饪、飞行和挖掘。'),
(4, 'Why do you always arrive late to work?', '你为什么上班总是迟到?'),
(4, 'Why do you always prefer to wake up early？', '你为什么总是喜欢早起?'),
(4, 'Why are you always in such a hurry?', '你为什么总是那么匆忙?'),
(4, 'This is a piece of garbage', '这是一块垃圾；'),
(4, 'World of Warcraft was all the rage among gamers', '《魔兽世界》在游戏玩家中风靡一时'),
(4, 'Man, you''re better off getting a new job', '伙计，你最好找份新工作。'),
(4, 'Don''t jump the gun and marry him too quickly, alright?', '不要操之过急地嫁给他，好吗?'),
(4, 'She drove a hard bargain at the flea market and saved a lot of money', '她在跳蚤市场拼命砍价，省了很多钱。'),
(4, 'For heaven''s sake, can you lower the AC a bit?', '看在上帝的份上，你能把空调关小点吗?'),
(4, 'coffee place', '咖啡馆'),
(4, 'win the championship', '赢得冠军'),
(4, 'score the job', '获得工作；成功被录用'),
(4, 'right away', '立即；马上'),
(4, 'a couple of', '一对；几个'),
(4, 'high nose', '高鼻梁'),
(4, 'day off', '休假日'),
(4, 'take the day off', '请假一天'),
(4, 'get acquainted with', '熟悉，了解'),
(4, 'upon arriving', '一到达……就'),
(4, 'get hands on', '亲自动手：亲自体验'),
(4, 'vintage vinyl record', '老式黑胶唱片'),
(4, 'I''ve been searching for', '我一直在寻找'),
(4, 'rust bucket', '<俚>废弃物；尤指严重锈蚀的汽车'),
(4, 'wake up early', '早起'),
(4, 'such a hurry', '如此匆忙'),
(4, 'pretty much', '几乎'),
(4, 'a piece of', '一张；一片；一块'),
(4, 'all the rage', '非常流行；大热'),
(4, 'World of Warcraft', '魔兽世界（一款游戏）'),
(4, 'get a job', '找工作；找份工作去'),
(4, 'vinyl record', '黑胶唱片'),
(4, 'better off', '状况好的；经济状况好的，富裕的'),
(4, 'Jump the gun', '过早行动或缺乏谨慎；操之过急'),
(4, 'drive a hard bargain', '强硬讨价还价'),
(4, 'flea market', '跳蚤市场'),
(4, 'for heaven''s sake', '看在上帝的份上；天啊'),
(4, 'nearby', '附近的'),
(4, 'nail', '指甲；钉子；用钉子钉住'),
(4, 'interview', '面试；面谈'),
(4, 'smallmouth', '小嘴'),
(4, 'director', '导演；主任；总监'),
(4, 'assistant', '助手；助理'),
(4, 'thrilling', '激动人心的'),
(4, 'score', '(比赛中) 得分; 进球；赢得'),
(4, 'enroll', '登记；报名'),
(4, 'acquainted', '了解的；认识的'),
(4, 'upon', '在……上；一……就'),
(4, 'vinyl', '乙烯基；乙烯基塑料；（尤指旧时）压制唱片的塑料'),
(4, 'vintage', '复古的；老式的；古老的；优质的 (葡萄酒)'),
(4, 'explode', '爆炸'),
(4, 'digging', '挖掘，采掘'),
(4, 'sailing', '航行'),
(4, 'literally', '字面上地；确实地'),
(4, 'rust', '锈；生锈'),
(4, 'bucket', '(有提梁的) 桶'),
(4, 'obviously', '（用于强调）显然，显而易见'),
(4, 'rage', '狂怒；<非正式>风靡一时，非常流行'),
(4, 'gamer', '游戏玩家'),
(4, 'alright', '没问题的；好吧（等于 all right）'),
(4, 'bargain', '讨价还价；便宜货'),
(4, 'flea', '跳蚤'),
(4, 'AC', '空调');