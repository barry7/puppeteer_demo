const jsUtil = require('./js-xlsx');

const puppeteer = require('puppeteer');
let bro;
(async () => {
    let data = [];
    let sub_pages = [];
    const browser = await puppeteer.launch({headless: false});
    bro = browser;
    const page = await browser.newPage();
    await page.goto('http://books.toscrape.com/');
    await page.waitFor(10);
    const result = await page.evaluate(() => {
        let title = document.querySelectorAll(".product_pod>h3>a");
        let str = [];
        for (let item of title) {
            console.log(item)
            str.push(item.href)
        }
        return str
    });
    return result
})().then(async (data) => {
    // const browser = await puppeteer.launch({headless: false});
    let results = [];
    for (let i = 0; i < 2; i++) {
        const page = await bro.newPage();
        await page.goto(data[i]);
        const result = await page.evaluate(() => {
            let title = document.querySelector("#content_inner > article > div.row > div.col-sm-6.product_main > h1").innerText;
            let price = document.querySelector("#content_inner > article > div.row > div.col-sm-6.product_main > p.price_color").innerText;
            return {title, price};
        });
        results.push(result)
        page.close()
    }
    console.log(results)
    // jsUtil.toExcel(results,'data_test','../excel/')
});
