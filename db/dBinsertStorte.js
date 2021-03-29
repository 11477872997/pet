/**
 * 商家插入接口sql
 */
const query =require('../config/mysql');  //连接数据库
let insertStorteMessage = function(choose,id,usernmae,password,img,place,source,StoreImage,DetailedAddress,ShopName,ShopIntroduction,phoneNumber,Storelongitude,Storelaitude) {
   //查询id
   if(choose == 0){
    let _sql = ` select id from storte where id = '${id}'`
      return query( _sql,__filename);
   }else if(choose == 1){
    // 插入商家信息
    let _sql = `insert into storte(id,usernmae,password,img,place,source,StoreImage,DetailedAddress,ShopName,ShopIntroduction,phoneNumber,Storelongitude,Storelaitude) VALUES ('${id}','${usernmae}',
    '${password}','${img}','${place}','${source}','${StoreImage}','${DetailedAddress}',
    '${ShopName}','${ShopIntroduction}','${phoneNumber}','${Storelongitude}','${Storelaitude}')`
    return query( _sql,__filename);
   };

}


module.exports = insertStorteMessage;
