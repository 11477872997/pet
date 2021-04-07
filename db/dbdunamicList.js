/**
 * 宠物圈 接口列表 sql
 */
const query =require('../config/mysql');  //连接数据库
let dbdunamicList = function(curPage,pageSize) {
        let _sql = ` select a.usernmae,a.img,t.DuaminTime,t.DuamincContent, t.DuaminImg ,t.DunamicId from dunamic t,user a WHERE a.id = t.id order by t.DuaminTime desc limit   ${curPage},${pageSize}` 
        return query( _sql,__filename);
}

module.exports = dbdunamicList;

