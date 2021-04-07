/**
 *   宠物圈 动态接口列表
 */
const dbdunamicList = require('../db/dbdunamicList'); //引入查询sql 语句
const logsUtil = require('../config/log');//自定义日志；
const getTIme = require('../config/getTime');//自定义处理时间
const dunamicList = async (ctx,next)=>{
    let req = ctx.request.body;
    try{
        if(req.curPage && req.pageSize){
        let curPage = '';
          if(req.pageSize < 10){
            curPage = req.curPage;
          }else{
            curPage = Number((req.curPage -1)*req.pageSize);
          }
          console.log(curPage)
          let data =  await dbdunamicList(curPage,req.pageSize); 
          data.forEach(function(item,index){
              data[index].DuaminImg = JSON.parse(data[index].DuaminImg); 
            let time = data[index].DuaminTime;
            let newtime = getTIme(time);
            data[index].DuaminTime = newtime;
          }) 
           ctx.response.status = 200;
           ctx.body = {
               code: -1,
               desc: '查询成功',
               data:data
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

module.exports = dunamicList;