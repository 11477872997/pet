/**
 * 公共上传图片api
 */
 const query =require('../config/mysql');  //连接数据库
 let dbfliename = function(id) {
       let _sql = ` select usernmae from user where id = '${id}'`
       return query( _sql,__filename);
 }
 
 module.exports = dbfliename;
 