/**
 * 连接数据库，各种方法实现
 *
 * **/

const mysql = require('mysql');
const dbConfig = require('./db');
const sqlMap = require('./sqlMap');

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true    // 多语句查询
});

module.exports = {
  // 数据操作测试
  /**-----------------------------------------------------**/
  getValue(req, res, next) {
    var id = req.query.id;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getValue;
      connection.query(sql, [id], (err, result) => {
        res.json(result);
        connection.release();
      })
    })
  },
  setValue(req, res, next) {
    console.log(req.body);
    var id = req.body.id, name = req.body.name;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.setValue;
      connection.query(sql, [name, id], (err, result) => {
        res.json(result);
        connection.release();
      })
    })
  },
  insertValue(req,res, next) {
    console.log('5555555',req.body);
    var name = req.body.name;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.insertValue;
      connection.query(sql, [name], (err, result) => {
        res.json(result);
        connection.release();
      })
    })
  },
  /**-----------------------------------------------------**/
  //注册用户
  insertUser(req,res, next) {
    console.log('5555555',req.body);
    var name = req.body.name, passWord = req.body.passWord, phone = req.body.phone , address = req.body.address , age = req.body.age , sex = req.body.sex ;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.insertUser;
      connection.query(sql, [name, passWord, phone, address, age, sex], (err, result) => {
        res.json(result);
        connection.release();
      })
    })
  },

  //  登录
  getLogin(req,res, next) {
    console.log('5555555',req.body);
    var name = req.body.name, passWord = req.body.passWord ;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getLogin;
      connection.query(sql, [name, passWord], (err, result) => {
        console.log(result)
        if (result.length) {
          const data = {
            status: 200,
            msg: '成功',
            data: {
              token: '123456789',
              id: result[0].id
            }
          }
          res.json(data);
        } else {
          const data = {
            status: -1,
            msg: '失败',
            data: null
          }
          res.json(data);
        }
        connection.release();
      })
    })
  },



}
