/**
 * 宠物圈点击当前详情页sql
 */
 const query =require('../config/mysql');  //连接数据库
 let dbthisPage = function(DunamicId) {
         let _sql = `select b.usernmae,b.img ,a.DuamincContent,a.DuaminTime,a.DuaminImg from dunamic a , user b WHERE a.DunamicId  =  '${DunamicId}'  and a.id = b.id  `
         return query( _sql,__filename);
 }
 
 module.exports = dbthisPage;
 
 