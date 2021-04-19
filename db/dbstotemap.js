/**
 * 小程序地图找店--查询
 */
 const query =require('../config/mysql');  //连接数据库
 let dbstotemap = function() {
         let _sql = `select ShopName,StoreTime,Storelongitude,Storelaitude,StoreImage,phoneNumber FROM  storte`
         return query( _sql,__filename);
 }
 
 module.exports = dbstotemap;
 
 