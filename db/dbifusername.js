/**
 * 判断商家用户名
 */
const query =require('../config/mysql');  //连接数据库
let dbifusername = function(usernmae) {
   //查询id
    let _sql = `SELECT  usernmae  from storte WHERE usernmae = '${usernmae}'`
   return query( _sql,__filename);
   

}


module.exports = dbifusername;
