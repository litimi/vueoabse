# oabase

## 安装项目依赖
```
npm install 或者 cnpm install
```

### 项目启动
```
npm run serve
```

### 打包
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### 项目目录
```
/vueoabse
 | - /oabase
    | - /public 公共文件
    | - /src 项目文件
        | - /assets  页面静态资源文件
        | - /components 组件文件夹
        | - /router 路由文件
        | - /store vue-strore存储文件
        | - /views 页面文件夹
        | - App.vue 主页面
        | - main.js
    | - .editorconfig
    | - .gitignore
    | - README.md
    | - babel.config.js
    | - package-lock.json
    | - package.json
 | - .gitignore

```

### 项目说明
```
// @ is an alias to /src
组件引入
import XXXX from '@/components/XXXXX/XXXX.vue

路由原生tab效果
&.router-link-exact-active { 
  color: #42b983;
}

```
### 项目说明
```
项目使用vue cli 快速开发进行开发，开发时采用@vue/cli 4.2.3， UI框架采用element-ui，
使用mock进行数据模拟接口。
2020-03-23  添加项目依赖
xlsx导出excel
添加html2canvas,jspdf转换页面为pdf下载
axios接口调用
moment时间格式整理
element-ui饿了么ui
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
