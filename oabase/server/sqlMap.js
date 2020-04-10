/**
 * sql语句
 *
 * **/


var sqlMap = {
  // 数据操作测试
  /**-----------------------------------------------------**/
  getValue: 'SELECT * FROM test WHERE id = ?',
  setValue: 'UPDATE test SET name = ? WHERE id = ?',
  insertValue: 'INSERT INTO test(name) VALUES (?)',
  /**-----------------------------------------------------**/

  // 账户注册
  insertUser: 'INSERT INTO user_t(name, passWord, phone, address, age, sex) VALUES (?, ?, ?, ?, ?, ?)',

  // 用户登陆
  getLogin: 'SELECT * FROM user_t WHERE name = ? AND passWord = ?',
}

module.exports = sqlMap;
