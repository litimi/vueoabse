/**
 *  后端 express 路由配置
 *
 * **/


const express = require('express');
const router = express.Router();
const api = require('./api');

//数据测试
/**-------------------------------------------**/
//获取
router.get('/getValue', (req, res, next) => {
  api.getValue(req, res, next);
});

// 修改
router.post('/setValue', (req, res, next) => {
  api.setValue(req, res, next);
});

//添加
router.post('/insertValue', (req, res, next) => {
  api.insertValue(req, res, next);
});
/**-------------------------------------------**/

//添加用户(注册)
router.post('/insertUser', (req, res, next) => {
  api.insertUser(req, res, next);
});

//登录
router.post('/getLogin', (req, res, next) => {
  api.getLogin(req, res, next)
})

module.exports = router;
