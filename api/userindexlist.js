/**
 * 小程序用户首页列表数据--查询
 */
 const {dbuserindexlist,dbuserindex} = require('../db/dbuserindexlist'); //引入查询sql 语句
 const logsUtil = require('../config/log');//自定义日志；
 const userindexlist = async (ctx,next)=>{
     let req = ctx.request.body;
     try{
         if(req.id && req.curPage && req.pageSize){
           let myid =   await dbuserindex(req.id);
            let curPage = '';
              if(req.pageSize < 10){
                curPage = req.curPage;
              }else{
                curPage = Number((req.curPage -1)*req.pageSize);
              }
           let data = await dbuserindexlist(myid[0].userlongitude,myid[0].userlaitude,curPage,req.pageSize);
           for(let i = 0 ; i<data.length;i++){
            let distance =  data[i].juli;
            let distance_str = "";
            if (parseInt(distance) >= 1) {
               distance_str = distance.toFixed(1) + "km";
             } else {
                 distance_str = distance * 1000 + "m";
             }
            data[i].juli = distance_str;
            data[i].Storemanage = JSON.parse( data[i].Storemanage);
           }
             ctx.response.status = 200;
             ctx.body = {
                 code: -1,
                 msg: "查询成功",
                 data
             }
         }else{
             ctx.response.status = 416;
             ctx.body = {
                 code: -1,
                 desc: '参数不齐全或参数不对'
             }
         }
        
     }catch(error){
         ctx.response.status = 500;
         ctx.body = {
             code: 0,
             msg: "服务器异常"
         }
         logsUtil.logError(ctx, error);	  //错误日志
         console.error('insertStorteMessage服务器报错，请看log/error目录最新日志内容', error);
     }
 
 }
 
 module.exports = userindexlist;