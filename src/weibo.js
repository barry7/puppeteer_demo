const jsUtil = require('./js-xlsx');

const puppeteer = require('puppeteer');

const _weibo_account = '';
const _weibo_password = '';
const _keyword = '';
let bro;
let target_num = 1;

async function addCookies(cookies_str, page, domain) {
    let cookies = cookies_str.split(';').map(pair => {
        let name = pair.trim().slice(0, pair.trim().indexOf('='))
        let value = pair.trim().slice(pair.trim().indexOf('=') + 1)
        return {name, value, domain}
    });
    await Promise.all(cookies.map(pair => {
        return page.setCookie(pair)
    }))
}

(async () => {
    let sub_pages = [];
    const browser = await puppeteer.launch({headless: false});
    // const browser = await puppeteer.launch();
    bro = browser;
    const page = await browser.newPage();
    await page.goto('https://weibo.com/');
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36");
    // addCookies('Ugrow-G0=8751d9166f7676afdce9885c6d31cd61; login_sid_t=25b17662410500430fbe5923c061adc4; cross_origin_proto=SSL; TC-V5-G0=8dc78264df14e433a87ecb460ff08bfe; _s_tentry=-; Apache=6476210221425.662.1556001461394; SINAGLOBAL=6476210221425.662.1556001461394; ULV=1556001461403:1:1:1:6476210221425.662.1556001461394:; UOR=,,www.jeffjade.com; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9W5801PW6PUVGTNJ75MUAQf65JpX5K2hUgL.FozpeKq7So2ESK22dJLoIpMLxK-L1KBL1K5LxKML1K5LBK9FqPiEwBtt; ALF=1587716764; SSOLoginState=1556180764; SUHB=0YhgX9IMQrYmdF; un=cgfbchooo@sina.com; wvr=6; wb_view_log_2116061251=1536*8641.25; wb_timefeed_2116061251=1; TC-Page-G0=a472c6c9af48bc4b9df1f924ca5cce70|1556183434|1556183434; webim_unReadCount=%7B%22time%22%3A1556183828654%2C%22dm_pub_total%22%3A0%2C%22chat_group_pc%22%3A0%2C%22allcountNum%22%3A0%2C%22msgbox%22%3A0%7D',
    //     page, 'https://weibo.com/')
    // await page.waitFor('#weibo_top_public > div > div > div.gn_search_v2 > input');
    // await page.waitFor('#plc_top > div > div > div.gn_search_v2 > input');
    await page.waitFor('#weibo_top_public > div > div > div.gn_position > div.gn_login > ul > li:nth-child(3) > a');
    page.click('#weibo_top_public > div > div > div.gn_position > div.gn_login > ul > li:nth-child(3) > a');
    await page.waitFor('.username.input_wrap input');
    await page.type('.username.input_wrap input',
        _weibo_account, {delay: 5});
    await page.type('.password.input_wrap input',
        _weibo_password, {delay: 5});
    // page.click('#weibo_top_public > div > div > div.gn_search_v2 > a');
    await page.waitFor('.W_ficon.ficon_mail.S_ficon');
    await page.waitFor('.gn_search_v2 input');
    await page.type('.gn_search_v2 input', _keyword, {delay: 5});
    page.click('.gn_search_v2 a');
    //等待微博卡片出现（需要手动输入验证码）
    await page.waitFor('.card-wrap', {
        timeout: 0
    });
    let pagenum = 0;
    let data = [];
    while (pagenum++ < target_num) {
        console.log('开始爬取第' + pagenum + '页内容，已爬取' + data.length + '条内容');
        await page.waitFor(Math.random * 500);
        console.log(pagenum);
        let page_data = await page.evaluate(() => {
            let wraps = document.querySelectorAll('.card-wrap>.card');
            let onePageData = [];
            for (let wrap of wraps) {
                if (wrap.classList.length > 1) {
                    console.log('should break:', wrap.classList);
                } else {
                    console.log('continue', wrap.classList);
                    let userName = wrap.querySelector('a.name').innerText;
                    let content = wrap.querySelector('p.txt').innerText;
                    let from = wrap.querySelector('p.from').innerText;
                    let forward = wrap.querySelector('.card-act ul li:nth-child(2)').innerText;
                    let comments = wrap.querySelector('.card-act ul li:nth-child(3)').innerText;
                    let thumbs = wrap.querySelector('.card-act ul li:nth-child(4)').innerText;
                    let obj = {userName, content, from, forward, comments, thumbs};
                    onePageData.push(obj);
                }
            }
            console.log(onePageData);
            return onePageData;
        });
        data = data.concat(page_data);
        page.click('a.next');
        await page.waitForNavigation(0);
    }
    return data;
})().then(async (data) => {
    console.log('爬取结束，已爬取' + data.length + '条内容');
    console.log('以下是数据样例：');
    console.log(data[0]);
    console.log(data[1]);
    console.log(data[2]);
    // const browser = await puppeteer.launch({headless: false});
    // let results = [];
    // for (let i = 0; i < 2; i++) {
    //     const page = await bro.newPage();
    //     await page.goto(data[i]);
    //     const result = await page.evaluate(() => {
    //         let title = document.querySelector("#content_inner > article > div.row > div.col-sm-6.product_main > h1").innerText;
    //         let price = document.querySelector("#content_inner > article > div.row > div.col-sm-6.product_main > p.price_color").innerText;
    //         return {title, price};
    //     });
    //     results.push(result)
    //     page.close()
    // }
    // console.log(results)
    // jsUtil.toExcel(results,'data_test','../excel/')
});
