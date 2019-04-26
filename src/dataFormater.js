let moment = require('moment');

let example = [{
    userName: 'LOL英雄联盟视频',
    content: '小老弟还是太年轻啊\n\n英雄联盟 ​',
    from: '昨天10:00 来自 微博 weibo.com',
    forward: '转发 52',
    comments: '评论 70',
    thumbs: ' 670'
},
    {
        userName: '兔玩游戏',
        content:
            '【NEST2019 Snake 0-1 EDG】\n\n中野节奏全面领先，EDG顺利拿下第一局！\nMVP：Scout——阿卡丽\n\n英雄联盟 #NEST2019# ​',
        from: '今天14:41 来自 搜狗高速浏览器',
        forward: '转发 35',
        comments: '评论 101',
        thumbs: ' 179'
    },
    {
        userName: '游点不靠谱',
        content:
            '#骚男离婚# 网友爆出骚男妻子小号，并发博称“被离婚”！而且网友还发现骚男老婆大号已经取关骚男！很久以前还被他俩感动过，现在看来......\n#小朵朵的七七# 英雄联盟 ​',
        from: '04月22日 23:42 来自 360安全浏览器',
        forward: '转发 708',
        comments: '评论 7532',
        thumbs: ' 10051'
    }];

function getDate(str) {
    str = str.split('来自')[0].replace(/^\s*|\s*$/g, "");
    console.log(str);
    if (str && str.indexOf('今天') > -1) {
        //tmp=11:23
        let tmp = str.split('今天')[1];
        let m = moment(tmp, 'HH:mm').format("YYYY-MM-DD HH:mm:ss");
        console.log(m)
    }
    if (str && str.indexOf('昨天') > -1) {
        //tmp=11:23
        let tmp = str.split('昨天')[1];
        let m = moment(moment(tmp, 'HH:mm').toDate().getTime() - 24 * 60 * 60 * 1000).format("YYYY-MM-DD HH:mm:ss");
        console.log(m)
    }
    if (str && str.indexOf('月') > -1) {
        let month = str.split(' ')[0].split('月')[0];
        let day = str.split(' ')[0].split('月')[1].split('日')[0];
        let time = str.split(' ')[1];
        let m = moment(moment(month+'-'+day+' '+time, 'MM-DD HH:mm')).format("YYYY-MM-DD HH:mm:ss");
        console.log(m)
    }
}

for (let i = 0; i < example.length; i++) {
    getDate(example[i].from)
}
