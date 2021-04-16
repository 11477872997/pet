/**
 * 小程序-宠物圈-动态查询列表接口--查询
 */
const query =require('../config/mysql');  //连接数据库
let dbdunamicList = function(curPage,pageSize) {
        // let _sql = ` select a.usernmae,a.img,t.DuaminTime,t.DuamincContent, t.DuaminImg ,t.DunamicId from dunamic t,user a WHERE a.id = t.id  order by t.DuaminTime desc limit ${curPage}, ${pageSize}` 
       let _sql = `select ( select count(1) from comment c WHERE c.DunamicId = t.DunamicId ) 
      AS num,a.usernmae,a.img,a.place,t.DuaminTime,t.DuamincContent, t.DuaminImg ,t.DunamicId 
		from dunamic t, user a  
		WHERE  a.id = t.id  
		ORDER  by t.DuaminTime desc
		LIMIT ${curPage}, ${pageSize}`

        return query( _sql,__filename);
}

module.exports = dbdunamicList

