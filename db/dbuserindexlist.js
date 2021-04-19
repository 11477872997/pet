/**
 * 小程序用户首页列表数据--查询
 */
const query =require('../config/mysql');  //连接数据库
let dbuserindexlist = function(Storelongitude,Storelaitude,curPage,pageSize) {
    
    let _sql = ` SELECT id,ShopName,Storemanage,DetailedAddress,StoreTime,(st_distance(point(Storelongitude,Storelaitude),point(${Storelongitude},${Storelaitude}))*111195/1000 ) as juli FROM storte ORDER BY juli ASC LIMIT ${curPage}, ${pageSize}`
      return query( _sql,__filename);
}
let dbuserindex = function(id) {
   
    let _sql = ` select userlongitude,userlaitude from user where   id = '${id}'`
    return query( _sql,__filename);
}


module.exports = {dbuserindexlist,dbuserindex};
