const jsUtil = require('./js-xlsx');

const puppeteer = require('puppeteer');
let bro;

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
    let data = [];
    let sub_pages = [];
    const browser = await puppeteer.launch({headless: false});
    bro = browser;
    const page = await browser.newPage();
    await page.goto('https://weibo.com/');
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36");
    // addCookies('Ugrow-G0=8751d9166f7676afdce9885c6d31cd61; login_sid_t=25b17662410500430fbe5923c061adc4; cross_origin_proto=SSL; TC-V5-G0=8dc78264df14e433a87ecb460ff08bfe; _s_tentry=-; Apache=6476210221425.662.1556001461394; SINAGLOBAL=6476210221425.662.1556001461394; ULV=1556001461403:1:1:1:6476210221425.662.1556001461394:; UOR=,,www.jeffjade.com; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9W5801PW6PUVGTNJ75MUAQf65JpX5K2hUgL.FozpeKq7So2ESK22dJLoIpMLxK-L1KBL1K5LxKML1K5LBK9FqPiEwBtt; ALF=1587716764; SSOLoginState=1556180764; SUHB=0YhgX9IMQrYmdF; un=cgfbchooo@sina.com; wvr=6; wb_view_log_2116061251=1536*8641.25; wb_timefeed_2116061251=1; TC-Page-G0=a472c6c9af48bc4b9df1f924ca5cce70|1556183434|1556183434; webim_unReadCount=%7B%22time%22%3A1556183828654%2C%22dm_pub_total%22%3A0%2C%22chat_group_pc%22%3A0%2C%22allcountNum%22%3A0%2C%22msgbox%22%3A0%7D',
    //     page, 'https://weibo.com/')
    await page.waitFor('#weibo_top_public > div > div > div.gn_search_v2 > input');
    await page.type('#weibo_top_public > div > div > div.gn_search_v2 > input', '英雄联盟', {delay: 5});
    page.click('#weibo_top_public > div > div > div.gn_search_v2 > a');
    await page.waitFor('.card-wrap')
    // document.querySelectorAll('.card-wrap')

    // const result = await page.evaluate(() => {
    //     let title = document.querySelectorAll(".product_pod>h3>a");
    //     let str = [];
    //     for (let item of title) {
    //         console.log(item)
    //         str.push(item.href)
    //     }
    //     return str
    // });
    // return result
    return ' '
})().then(async (data) => {
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
