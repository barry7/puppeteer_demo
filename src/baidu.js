const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://baidu.com');
    await page.type('#kw', 'puppeteer', {delay: 50});
    page.click('#su');
    await page.waitFor(1000);
    let hlist=await page.$$('h3.t')
    log(hlist.length)
    // for (let i = 0; i <hlist.length ; i++) {
    //     console.log(hlist[i])
    // }
    // const targetLink = await page.evaluate(() => {
    //     return [...document.querySelectorAll('.result a')].filter(item => {
    //         return item.innerText && item.innerText.includes('npm')
    //     }).toString()
    // });
    // await page.goto(targetLink);
    // await page.waitFor(1000);
    //
    //
    // await browser.close();
})();
