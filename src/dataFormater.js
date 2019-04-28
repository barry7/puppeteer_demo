let moment = require('moment');

let example = [
    {
        "userName": "游民星空",
        "content": "【玩家在《LOL》中剧透《复联4》剧情 被拳头封号三天】Reddit上一位玩家Laptop-Guy在《英雄联盟》板块发帖称，在游戏中剧透《复仇者联盟4》剧情会被拳头封号了三天。拳头官方发给玩家的邮件中写到：“我知道你很兴奋想要和其他人讨论最新的《复仇者联盟》电影，但向那些还没看过这部电影的玩家剧透，这 ​ 展开全文c",
        "from": "24分钟前 来自 微博 weibo.com",
        "forward": "转发 9",
        "comments": "评论 39",
        "thumbs": " 50",
        "savedTime": 1556435446794
    },
    {
        "userName": "兔玩游戏",
        "content": "【当敌方打野第七次从草丛中蹦出来Gank我的时候】\n\n敌方打野：啊哈！我又来了！\n我：行吧，好吧，随你吧，爱咋咋\n\n英雄联盟 L兔玩游戏的秒拍视频 ​",
        "from": "20秒前 转赞人数超过80 来自 秒拍网页版",
        "forward": "转发 22",
        "comments": "评论 24",
        "thumbs": " 66",
        "savedTime": 1556435446797
    },
    {
        "userName": "英雄联盟",
        "content": "#IG冠军皮肤# 【iG冠军皮肤原始设计想法揭秘＆全员推销环节】\n@ig丶JackeyLove ：黑洞的门太小了不太满意。\n@iG_TheShy ：其实还是想选择锐雯的冠军皮肤的，但是比赛没用过，所以就选择了剑姬。\n@iGDuke ：16年夺冠的皮肤没有谨慎设计所以不太满意，这次好好设计了。\n\n接下来是全员广告时间——\n​ 展开全文c",
        "from": "30秒前 转赞人数超过90 来自 微博 weibo.com",
        "forward": "转发 11",
        "comments": "评论 44",
        "thumbs": " 89",
        "savedTime": 1556435446798
    },
    {
        "userName": "热门游戏视频",
        "content": "英雄联盟假如皇子没勾到旗子 ​",
        "from": "57秒前",
        "forward": "转发",
        "comments": "评论",
        "thumbs": "",
        "savedTime": 1556435446798
    },
    {
        "userName": "电竞小小生",
        "content": "英雄联盟深渊巨口丝血反杀发条魔灵 L电竞小小生的微博视频 ​",
        "from": "1分钟前 来自 微博网页",
        "forward": "转发",
        "comments": "评论",
        "thumbs": "",
        "savedTime": 1556435446799
    },
    {
        "userName": "_GregRan",
        "content": "@英雄联盟 请问什么时候会优化排位赛进入游戏机制，没一把都要等三分钟左右，没有考虑过区和区合并一下吗？每个区日活跃数数据真的不考虑吗？点击接受进去比赛没有确认的能不能有10秒钟惩罚？比赛三分钟的能不能给其他9个人各加两分表达对时间浪费的尊重？ ​",
        "from": "1分钟前 来自 iPhone客户端",
        "forward": "转发",
        "comments": "评论",
        "thumbs": "",
        "savedTime": 1556435446799
    },
    {
        "userName": "LOL英雄那点事",
        "content": "余小C和周淑怡连麦PK合跳（鸡你太美）全程高能场面极度舒适！ up：乐芙兰的小学弟英雄联盟那点事 #主播那点事# LLOL英雄那点事的微博视频 ​",
        "from": "2分钟前 来自 微博 weibo.com",
        "forward": "转发 1",
        "comments": "评论 1",
        "thumbs": " 4",
        "savedTime": 1556435446800
    },
    {
        "userName": "游戏迷你君",
        "content": "【英雄联盟 张大仙】张大仙千里之外取敌首级，落地金色帅气收场致敬若风？ L游戏就要这么玩的秒拍视频 ​",
        "from": "2分钟前 来自 微博云剪",
        "forward": "转发",
        "comments": "评论",
        "thumbs": "",
        "savedTime": 1556435446800
    },
    {
        "userName": "游戏白小生",
        "content": "哈哈哈哈这是真的孤儿亚索了\n\n英雄联盟 ​",
        "from": "3分钟前 来自 iPhone客户端",
        "forward": "转发",
        "comments": "评论 6",
        "thumbs": " 6",
        "savedTime": 1556435446801
    },
    {
        "userName": "玩加电竞LOL",
        "content": "【韩服9.8版本各位置英雄强度排名：泰坦成为T1级别辅助】\n上路方面锐雯又回到了一姐之位，并且锐雯的胜率也来到了上单第一，武器和鳄鱼也再次回到了T1梯队，天使在改版之后也基本都在T1梯队之中。\n打野位方面没有什么变动，从胜率表现来看挖掘机也排在第一，挖掘机在这个版本仍然是打野位上分的不二之 ​ 展开全文c",
        "from": "3分钟前 来自 微博 weibo.com",
        "forward": "转发 2",
        "comments": "评论 7",
        "thumbs": " 5",
        "savedTime": 1556435446801
    },
    {
        "userName": "电竞小小生",
        "content": "英雄联盟: 二级抓我就算了, 你还A我的兵。 L电竞小小生的秒拍视频 ​",
        "from": "4分钟前 来自 微博网页",
        "forward": "转发",
        "comments": "评论",
        "thumbs": "",
        "savedTime": 1556435446802
    },
    {
        "userName": "游戏情报局",
        "content": "Ax英雄联盟教学20：教你如何玩转小鱼人，王者局对线细节 L游戏情报局的微博视频 ​",
        "from": "5分钟前 来自 微博网页",
        "forward": "转发",
        "comments": "评论",
        "thumbs": "",
        "savedTime": 1556435446803
    },
    {
        "userName": "游卡哥",
        "content": "国外玩家在《#英雄联盟#》游戏中剧透《复仇者联盟4》剧情，遭网友举报，被拳头封号三天！请大家#在不剧透复联4的情况下讨论剧情# ​",
        "from": "7分钟前 来自 微博 weibo.com",
        "forward": "转发",
        "comments": "评论 1",
        "thumbs": " 3",
        "savedTime": 1556435446803
    },
    {
        "userName": "游戏控",
        "content": "#英雄联盟# 一位在LOL中剧透#复联4# 的玩家被拳头封号了三天 ​",
        "from": "8分钟前 来自 微博 weibo.com",
        "forward": "转发",
        "comments": "评论 1",
        "thumbs": " 4",
        "savedTime": 1556435446804
    },
    {
        "userName": "畅游召唤师峡谷",
        "content": "【英雄联盟】女警被一炮秒杀！杰斯：我要掠夺对面复活的权利 L畅游召唤师峡谷的微博视频 ​",
        "from": "10分钟前 来自 微博网页",
        "forward": "转发",
        "comments": "评论",
        "thumbs": "",
        "savedTime": 1556435446804
    },
    {
        "userName": "攒一身丶善良",
        "content": "#英雄联盟#好气啊，不知道都多少次这样了，服务器网炸，延迟三千多，我退出游戏从新进去了，还是算我挂机，连5分钟都没有，这裁决之镰有毒吧 ，我上个分容易嘛我 ​",
        "from": "11分钟前 来自 HUAWEI P20 Pro",
        "forward": "转发",
        "comments": "评论",
        "thumbs": "",
        "savedTime": 1556435446804
    },
    {
        "userName": "游戏小萌妹",
        "content": "李哥这个表情是好吃还是不好吃？\n\ntwi：bbosyuk\n英雄联盟 #faker# ​",
        "from": "11分钟前 来自 微博 weibo.com",
        "forward": "转发",
        "comments": "评论",
        "thumbs": "",
        "savedTime": 1556435446805
    },
    {
        "userName": "电竞小小生",
        "content": "英雄联盟: 盲僧的几个花式操作, 哪个更帅一点呢? L电竞小小生的秒拍视频 ​",
        "from": "12分钟前 来自 微博网页",
        "forward": "转发",
        "comments": "评论",
        "thumbs": "",
        "savedTime": 1556435446805
    },
    {
        "userName": "丨白茶清风",
        "content": "IG牛逼，王校长最帅英雄联盟 ​",
        "from": "13分钟前 来自 HUAWEI P20",
        "forward": "转发",
        "comments": "评论",
        "thumbs": "",
        "savedTime": 1556435446805
    },
    {
        "userName": "唯一美玉",
        "content": "微博视频和L推广引流薇V信KKHH7H的秒拍视频自从重生之后，她一直都想找老父亲谈一谈这本书的问题，可是父亲避而不见，根本无从谈起。 ​",
        "from": "14分钟前 来自 微博 weibo.com",
        "forward": "转发",
        "comments": "评论",
        "thumbs": "",
        "savedTime": 1556435446806
    },
    {
        "userName": "开心的游戏酱",
        "content": "#小酱趣图##英雄联盟#Sneaky女友晒出了《Fate/Grand Order》角色cosplay照，一如既往的性感风 ​",
        "from": "14分钟前 来自 微博 weibo.com",
        "forward": "转发",
        "comments": "评论",
        "thumbs": " 3",
        "savedTime": 1556435446806
    }
];

function getDate(str, timestamp) {
    let savedTime = moment(timestamp);
    str = str.split('来自')[0].replace(/^\s*|\s*$/g, "");
    console.log(str);
    let m;
    if (str && str.indexOf('今天') > -1) {
        //tmp=11:23
        let tmp = str.split('今天')[1];
        m = moment(tmp, 'HH:mm').format("YYYY-MM-DD HH:mm:ss");
    }
    if (str && str.indexOf('昨天') > -1) {
        //tmp=11:23
        let tmp = str.split('昨天')[1];
        m = moment(moment(tmp, 'HH:mm').toDate().getTime() - 24 * 60 * 60 * 1000).format("YYYY-MM-DD HH:mm:ss");
    }
    if (str && str.indexOf('月') > -1) {
        let month = str.split(' ')[0].split('月')[0];
        let day = str.split(' ')[0].split('月')[1].split('日')[0];
        let time = str.split(' ')[1];
        m = moment(moment(month + '-' + day + ' ' + time, 'MM-DD HH:mm')).format("YYYY-MM-DD HH:mm:ss");
    }
    if (str && str.indexOf('前') > -1) {
        let time_str = str.split('前')[0];
        if (time_str && time_str.indexOf('秒') > -1) {
            let second = time_str.split('秒')[0];
            m = moment(moment(savedTime).toDate().getTime() - 1000 * second).format("YYYY-MM-DD HH:mm:ss");
        } else if (time_str && time_str.indexOf('分钟') > -1) {
            let minute = time_str.split('分钟')[0];
            m = moment(moment(savedTime).toDate().getTime() - 60 * 1000 * minute).format("YYYY-MM-DD HH:mm:ss");
        } else if (time_str && time_str.indexOf('小时') > -1) {
            let hour = time_str.split('分钟')[0];
            m = moment(moment(savedTime).toDate().getTime() - 60 * 60 * 1000 * hour).format("YYYY-MM-DD HH:mm:ss");
        }
    }
    console.log(m)
}

for (let i = 0; i < example.length; i++) {
    getDate(example[i].from, example[i].savedTime);
}
