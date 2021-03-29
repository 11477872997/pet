/**
 * 宠物圈 接口列表 sql
 */
const query =require('../config/mysql');  //连接数据库
let dbdunamicList = function(curPage,pageSize) {
        let _sql = ` select * from dunamic order by DuaminTime desc limit ${curPage},${pageSize}` 
        return query( _sql,__filename);
}

module.exports = dbdunamicList;

