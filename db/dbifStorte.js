/**
 * 小程序-公共-判断用户与商家是否存在的接口--查询
 */
const query =require('../config/mysql');  //连接数据库
let dbifStorte = function(id) {
   //查询id
    let _sql = ` select a.id ,a.UserType from user as a WHERE a.id = '${id}'
union all
select b.id ,b.UserType from storte as b WHERE b.id = '${id}'`
   return query( _sql,__filename);
   

}


module.exports = dbifStorte;
