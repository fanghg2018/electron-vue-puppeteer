const puppeteer = require('puppeteer')

const googleSearch = async (context) => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto('https://www.baidu.com')
  await page.focus('#kw') // 关键字输入框的id. 注释2
  await page.type('#kw', context)
  await page.click('#su') // '百度一下'按钮的id. 注释3
  await page.waitFor(3000)
  await browser.close()
}
