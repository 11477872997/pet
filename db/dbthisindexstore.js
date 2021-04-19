/**
 * 小程序首页列表当前商家--查询
 */
const query =require('../config/mysql');  //连接数据库
let dbthisindexstore = function(id) {
       //查询用户
    let _sql = `select id,usernmae,img,StoreImage,ShopName,DetailedAddress,ShopIntroduction,StoreTime,Storemanage  from storte where id = '${id}'`
      return query( _sql,__filename);
}

module.exports = dbthisindexstore
