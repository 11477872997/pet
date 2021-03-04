const query =require('../config/mysql');  //连接数据库
let findUserData = function() {
  let _sql = `select * from  user`
  return query( _sql,__filename)
}

module.exports = findUserData;
