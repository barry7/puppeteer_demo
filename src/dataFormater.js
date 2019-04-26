let moment = require('moment');

let example = [
    {
        "userName": "兔玩游戏",
        "content": "【NEST2019 Snake 0-2 EDG】\n\n上局精彩回顾：\nScout阿卡丽盲视野闪现Q打断回城，随后一Q双杀，干净利落\n\n英雄联盟 #NEST2019# ​",
        "from": "53分钟前 来自 搜狗高速浏览器",
        "forward": "转发 78",
        "comments": "评论 72",
        "thumbs": " 254"
    },
    {
        "userName": "游戏台",
        "content": "这波对决什么起步？（via：英雄联盟jjking）\n英雄联盟 L游戏台的微博视频 ​",
        "from": "49分钟前",
        "forward": "转发 5",
        "comments": "评论 44",
        "thumbs": " 149"
    },
    {
        "userName": "游戏圈资讯君",
        "content": "#英雄联盟# 英雄联盟 KDA 阿狸Cos。Coser：Ekiholic ​",
        "from": "今天12:01 来自 微博 weibo.com",
        "forward": "转发 14",
        "comments": "评论 16",
        "thumbs": " 63"
    },
    {
        "userName": "兔玩游戏",
        "content": "【NEST2019 EDG 3-0 Snake】\n\n排空视野偷掉大龙成为比赛胜负手，恭喜EDG晋级线下赛！\nMVP：Meiko——洛\n\n英雄联盟 #NEST2019# ​",
        "from": "20秒前 转赞人数超过80 来自 搜狗高速浏览器",
        "forward": "转发 19",
        "comments": "评论 81",
        "thumbs": " 80"
    },
    {
        "userName": "大电竞eSportsFocus",
        "content": "#NEST2019# #英雄联盟#\n\nEDG开车五人进泉水， 3：0轻松击败SS 晋级线下赛！ ​",
        "from": "30秒前 转赞人数超过20 来自 微博 weibo.com",
        "forward": "转发 6",
        "comments": "评论 9",
        "thumbs": " 16"
    },
    {
        "userName": "助手哥有点6",
        "content": "【NEST2019 EDG vs SS 2：0】第三局:\n\nEDG五人随Scout瑞兹灵车冲泉水~随后EDG推掉SS基地，3:0轻取SS！\n英雄联盟 #NEST2019# ​",
        "from": "34秒前 来自 微博 weibo.com",
        "forward": "转发",
        "comments": "评论",
        "thumbs": " 1"
    },
    {
        "userName": "NEST全国电子竞技大赛",
        "content": "#NEST2019# 恭喜EDG获得第三局比赛的胜利！晋级NEST2019《英雄联盟》贵阳总决赛！！！ ​",
        "from": "41秒前 来自 微博 weibo.com",
        "forward": "转发",
        "comments": "评论",
        "thumbs": " 1"
    },
    {
        "userName": "3H曲线",
        "content": "#NEST2019# 今日14：00 EDG - Snake\n竞猜+赛程直播：O网页链接\nEDG：\nTOP Sleepy\nJUG JieJie\nMID Scout\nADC iBoy\nSUP Meiko\n替补 EDG.Haro EDG.Hope\n\nSS：\nTOP Flandre\nJUG SofM\nMID Fenfen\nADC Asura\nSUP Maestro ​#英雄联盟# ​",
        "from": "1分钟前 转赞人数超过400 来自 微博 weibo.com",
        "forward": "转发 20",
        "comments": "评论 20",
        "thumbs": " 609"
    },
    {
        "userName": "禹台长",
        "content": "【英雄联盟】笑就完事了#英雄联盟# L禹台长的微博视频 ​",
        "from": "2分钟前 来自 iPhone X",
        "forward": "转发",
        "comments": "评论",
        "thumbs": ""
    },
    {
        "userName": "英雄联盟新鲜事儿",
        "content": "英雄联盟 LMS网友爆料，前FW教练叉烧或许下赛季会去V5当教练。 ​",
        "from": "3分钟前 来自 微博 weibo.com",
        "forward": "转发",
        "comments": "评论",
        "thumbs": ""
    },
    {
        "userName": "虎牙芜湖神",
        "content": "芜湖神来了：听说我的意中人会踩着七彩祥云来娶我#芜湖神# #英雄联盟# L虎牙芜湖神的微博视频 ​",
        "from": "7分钟前 来自 微博 weibo.com",
        "forward": "转发",
        "comments": "评论 1",
        "thumbs": " 2"
    },
    {
        "userName": "捞月狗英雄联盟",
        "content": "英雄联盟\n情侣哪有基友好 ​",
        "from": "8分钟前 转赞人数超过30 来自 超话",
        "forward": "转发 1",
        "comments": "评论 5",
        "thumbs": " 31"
    },
    {
        "userName": "电竞研究社",
        "content": "#英雄联盟# 【Riot门口彩蛋或揭示新英雄来源：班德尔城】\n近日拳头设计师Ashekandi在推特上放出了拳头公司门口的新涂鸦，并表示这个图案是“前往班德尔城的入口”；值得一提的是，在今天公布的新英雄悠米预告视频中，悠米的书中也有着相同的图案，这是否意味着悠米是一位来自班德尔城的英雄呢 ​",
        "from": "8分钟前 来自 微博 weibo.com",
        "forward": "转发",
        "comments": "评论",
        "thumbs": " 2"
    },
    {
        "userName": "助手哥有点6",
        "content": "【NEST2019 EDG vs SS 2：0】第三局:\n\nJieJie盲僧敌方五人之中直接一脚踢出SS核心SofM螳螂！\n英雄联盟 #NEST2019# ​",
        "from": "8分钟前 来自 微博 weibo.com",
        "forward": "转发",
        "comments": "评论",
        "thumbs": ""
    },
    {
        "userName": "虎扑电竞",
        "content": "【SS 0-2 EDG】\n\n蜘蛛野区掌控雷电，EDG拿到赛点。\n\nJiejie的蜘蛛感觉有丶猛！\n\n英雄联盟 ​",
        "from": "9分钟前 转赞人数超过10 来自 微博 weibo.com",
        "forward": "转发",
        "comments": "评论 4",
        "thumbs": " 12"
    },
    {
        "userName": "江南吴语1",
        "content": "米易新山梯田，约有600年的悠久历史，梯田分布在海拔1000—3000多米的山坡上，景色秀丽。今天阳光灿烂，远处的米易县清晰可见，全体英雄联盟在此合影！ 2攀枝花·攀枝花保安营机场 ​",
        "from": "8分钟前 来自 HUAWEI Mate 20 Pro",
        "forward": "转发",
        "comments": "评论",
        "thumbs": ""
    },
    {
        "userName": "英雄联盟新鲜事儿",
        "content": "英雄联盟 Duke才是真！赢家！在昨天的比赛后Duke几乎满贯了LPL和LCK的所有冠军，大到联赛冠军小到杯赛冠军，还有一次MSI两次世界赛冠军，这个履历着实有些耀眼了 ​",
        "from": "11分钟前 转赞人数超过300 来自 微博 weibo.com",
        "forward": "转发 14",
        "comments": "评论 125",
        "thumbs": " 345"
    },
    {
        "userName": "逹达仔Zz-",
        "content": "微博视频和L推广引流薇V信KKHH7H的秒拍视频突然，她打了一个响指，然后笑了起来，“侯三哥，这个东西我就送给你吧，你若是参透了这机关，以后可要记得给我做一个比这个还要好看的。” ? ​",
        "from": "10分钟前 来自 微博 weibo.com",
        "forward": "转发",
        "comments": "评论",
        "thumbs": ""
    },
    {
        "userName": "幽默搞笑娱乐榜姐",
        "content": "调皮美少女迪丽热巴整蛊张云龙 问张云龙袜子香不香 #正义英雄联盟#经典幽默搞笑视频 L幽默搞笑娱乐榜姐的秒拍视频 ​",
        "from": "10分钟前",
        "forward": "转发",
        "comments": "评论",
        "thumbs": " 2"
    },
    {
        "userName": "英雄联盟神吐槽",
        "content": "【网友投稿】有人知道怎么样才可以打到这么高的胜率吗（匹配四千多场94%的胜率）\n英雄联盟 ​",
        "from": "10分钟前",
        "forward": "转发 26",
        "comments": "评论 35",
        "thumbs": " 45"
    },
    {
        "userName": "兔玩游戏",
        "content": "【NEST2019 Snake 0-2 EDG】\n\n恭喜EDG拿下第二局！\nMVP：01年的新人打野——JieJie蜘蛛！操作犀利，思路清晰\n\n英雄联盟 #NEST2019# ​",
        "from": "12分钟前 转赞人数超过200 来自 搜狗高速浏览器",
        "forward": "转发 46",
        "comments": "评论 132",
        "thumbs": " 174"
    },
    {
        "userName": "畅游召唤师峡谷",
        "content": "【英雄联盟】防御塔就是在针对我，狮子狗：寒冰明明比我先动手，你为什么不打他？ L畅游召唤师峡谷的微博视频 ​",
        "from": "15分钟前 来自 微博网页",
        "forward": "转发",
        "comments": "评论",
        "thumbs": ""
    }
]

function getDate(str) {
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
            m = moment(moment().toDate().getTime() - 1000 * second).format("YYYY-MM-DD HH:mm:ss");
        } else if (time_str && time_str.indexOf('分钟') > -1) {
            let minute = time_str.split('分钟')[0];
            m = moment(moment().toDate().getTime() - 60 * 1000 * minute).format("YYYY-MM-DD HH:mm:ss");
        } else if (time_str && time_str.indexOf('小时') > -1) {
            let hour = time_str.split('分钟')[0];
            m = moment(moment().toDate().getTime() - 60 * 60 * 1000 * hour).format("YYYY-MM-DD HH:mm:ss");
        }
    }
    console.log(m)
}

for (let i = 0; i < example.length; i++) {
    getDate(example[i].from)
}
