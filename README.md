# electron_vue_demo

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
增加配置
 "puppeteer": "5.0.1",
 主进程：background.js加入
 ```js
global.puppeteer = require('puppeteer-core')

```
渲染进程：

```js
const remote = window.require('electron').remote
const puppeteer = remote.getGlobal('puppeteer')

const app = await puppeteer.launch({
        headless: false,
        executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'

//executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'

      }) // default is true
```