import * as puppeteer from 'puppeteer-core'

const getDefaultOsPath = () => {
  if (process.platform === 'win32') {
    return 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
  } else {
    return '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  }
}

export const googleSearch = async (context) => {
  const browser = await puppeteer.launch({
    slowMo: 10,
    headless: false,
    executablePath: getDefaultOsPath()
  })

  const page = await browser.newPage()
  await page.goto('https://www.google.com')
  await page.type(
    '#tsf > div:nth-child(2) > div > div.RNNXgb > div > div.a4bIc > input',
    context + String.fromCharCode(13)
  )
}
