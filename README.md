# c-mobile

[![npm](https://img.shields.io/npm/dt/c-mobile.svg?style=flat-square)](https://www.npmjs.com/package/c-mobile)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/c-mobile/dist/index.umd.js?compression=gzip&label=gzip%20size:%20JS)
![CSS gzip size](http://img.badgesize.io/https://unpkg.com/c-mobile/dist/index.css?compression=gzip&label=gzip%20size:%20CSS)
[![npm package](https://img.shields.io/npm/v/c-mobile.svg)](https://www.npmjs.org/package/c-mobile)

> Mobile UI elements for Vue 2.0

- [中文文档](http://c-mobile-docs.chooin.com)

### 安装

```sh
yarn add c-mobile
# or
npm install c-mobile --save
```

### 使用

```js
import Vue from 'vue'
import Mobile from 'c-mobile'
import 'c-mobile/dist/index.css'

Vue.use(Mobile)
```

### 自定义主题

在项目下建立一个 scss 文件 index.scss，并写入下面内容：

```scss
// 常用颜色
$primary: #39f;
$success: #0c6;
$warning: #f90;
$danger: #f30;

// 文字颜色
$text: #737373;
$text-light: #a6a6a6;

// 边框颜色
$border: #d9d9d9;
@import '~c-mobile/dist/index.scss';
```

然后在入口文件 main.js 内导入这个 scss 文件即可：

```js
import Vue from 'vue'
import Mobile from 'c-mobile'
import './index.scss'

Vue.use(Mobile)
```

viewport 添加 viewport-fit=cover 支持 iPhoneX 等异形屏

```html
<meta name="viewport" content="viewport-fit=cover">
```
