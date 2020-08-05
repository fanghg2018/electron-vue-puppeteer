<template>
  <div class="hello">
   <input v-model="searchContent" @keydown.enter="search" />
    <button @click="search(searchContent)">Search</button>
  </div>
</template>

<script>
const puppeteer = require('puppeteer-core')
export default {
  name: 'HelloWorld',
  data () {
    return {
      searchContent: ''
    }
  },
  methods: {
    async search (context) {
      const browser = await puppeteer.launch({
        headless: false,
        // 除受控提示
        ignoreDefaultArgs: ['--enable-automation'],
        executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
      })
      const page = await browser.newPage()
      await page.goto('https://www.baidu.com')
      await page.focus('#kw') // 关键字输入框的id. 注释2
      await page.type('#kw', context)
      await page.click('#su') // '百度一下'按钮的id. 注释3
      await page.waitFor(3000)
      await browser.close()

      this.searchContent = ''
    }
  }
}
</script>
