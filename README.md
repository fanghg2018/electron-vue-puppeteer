# electron_vue_puppeteer_demo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn electron:serve
```

### Compiles and minifies for production
```
yarn electron:build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration

使用：

```js
const puppeteer = require('puppeteer-core')
(async () => {
const browser = await puppeteer.launch({
        headless: false,
       //除受控提示
        ignoreDefaultArgs:['--enable-automation'],
        executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
      });
      const page = await browser.newPage();
      await page.goto('https://example.com');
      
      await browser.close();
})();
```
问题：

```js
ws in ./node_modules/puppeteer-core/lib/cjs/puppeteer/common/WebSocketTransport.js

To install it, you can run: npm install --save ws

```
增加配置
vue.config.js 添加：
 ```js

module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      externals: ['puppeteer-core'] // 这里是你使用的原生模块名字列表，改成自己的即可

      // nodeModulesPath: ['../../node_modules', './node_modules']// 这里是多个node_modules路径，按自己需要配置即可
    }
  }
}


```

```js
运行后有乱码：  (node:22808) ExtensionLoadWarning: Warnings loading extension at
注释掉background.js  app.on('ready', async () => { 后面的。
  // if (isDevelopment && !process.env.IS_TEST) {
  //   // Install Vue Devtools
  //   try {
  //     await installExtension(VUEJS_DEVTOOLS)
  //   } catch (e) {
  //     console.error('Vue Devtools failed to install:', e.toString())
  //   }
  // }
```
