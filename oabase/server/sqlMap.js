/**
 * sql语句
 *
 * **/


var sqlMap = {

  //-----------------------------
  // 账户注册
  insertUser: 'INSERT INTO user_t(name, passWord, phone, address, age, sex) VALUES (?, ?, ?, ?, ?, ?)',

  // 用户登陆
  getLogin: 'SELECT * FROM user_t WHERE name = ? AND passWord = ?',
  //-----------------------------

  // 获取首页数据



  //----------------------------------------
  //物品库
  //获取全部物品库存
  getGoods: 'SELECT * FROM goods_t',

  //录入物品
  setGoods: 'INSERT INTO goods_t(goodsName, goodsPrice, goodsNum, goodsBrand, manufacturer, actualPrice, quantityUsed, reQuantity) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',

  //更新物品数据
  updateGoods: 'UPDATE goods_t SET goodsNum=?,reQuantity=? WHERE id=?',

  //查找物品（根据厂商或品牌或物品名或者价格）
  checkGoods: {
    checkGoodsByPrice: 'SELECT * FROM goods_t WHERE goodsPrice = ?',
    checkGoodsByName: 'SELECT * FROM goods_t WHERE goodsName = ?',
    checkGoodsByBrand: 'SELECT * FROM goods_t WHERE goodsBrand = ?',
    checkGoodsByManufacturer: 'SELECT * FROM goods_t WHERE manufacturer = ?',
  },

  //物品删除
  deleteGoods: 'DELETE FROM goods_t where id = ?',
  //------------------------------------------


  //-----------------------------------------
  //部门管理
  /**
   * `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '部门id',
   *`depName` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '部门名称',
   *`depDesec` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '部门职能描述',
   * **/
  //获取部门列表
  getDepartment: 'SELECT * FROM dep_t',

  //新增部门
  setDepartment: 'INSERT INTO dep_t(depName, depDesec) VALUES (?,?)',

  //更新部门
  updateDepartment: 'UPDATE dep_t SET depName=?,depDesec=?',

  //删除部门
  deleteDepartment: 'DELETE FROM dep_t where id = ?',
  //-----------------------------------------

  //----------------------------------------
  //部门成员
  //新增部门成员
  /**
   *
   * `id` int(11) NOT NULL COMMENT '员工id',
   *`name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '员工姓名',
   *`age` int(11) DEFAULT NULL COMMENT '员工年龄',
   *`sex` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '员工性别',
   *`address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '员工家庭住址',
   *`borthday` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '出生日期',
   *`phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '联系电话',
   *`entry` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '入职时间',
   *`colleges` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '毕业院校',
   *`depId` int(11) DEFAULT NULL COMMENT '员工所在部门',
   * **/
  setStaff: 'INSERT INTO staff_t(name, age, sex, address, borthday, phone, entry, colleges, depId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?  )',

  //获取部门成员
  getStaff: 'SELECT * FROM staff_t WHERE depId = ?',

  //修改部门成员信息
  updateStaff: 'UPDATE staff_t SET name=?, age=?, sex=?, address=?, borthday=?, phone=?, entry=?, colleges=?, depId=? WHERE id=?',

  //删除部门成员
  deleteStaff: 'DELETE FROM staff_t WHERE id=?',
  //----------------------------------------


  //----------------------------------------
  //项目管理
  //

  //----------------------------------------


  //----------------------------------------
  //账务管理


  //----------------------------------------


  //----------------------------------------
  //系统管理


  //----------------------------------------



}

module.exports = sqlMap;
