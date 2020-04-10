/**
 *  后端入口文件，启动后端服务
 *
 * **/

const routerApi = require('./router');
// const path = require('path');
const express = require('express');
const bodyParser = require('body-parser'); // post 数据是需要
// const router = express.Router();
const app = express();

app.use(bodyParser.json());


// 后端api路由
app.use('/api', routerApi);

// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');
