/**
 * 宠物圈当前动态评论的评论列表接口
 */
const {dbcommentSon,dbSon} = require('../db/dbinquireComment'); //引入查询sql 语句
const logsUtil = require('../config/log');//自定义日志；
const getTIme = require('../config/getTime')//自定义处理时间
const commentSon = async (ctx,next)=>{
    let req = ctx.request.body;
    try{
        if(req.discussid){
          let data =  await dbcommentSon(req.discussid);
              for(let i = 0 ;i<data.length;i++){
                     let time = data[i].CommentTime;
                    let newtime = getTIme(time);
                    data[i].CommentTime = newtime;
                    let dataSon = await  dbSon(req.DunamicId,data[i].CommentId);
                    data[i].dataSon = dataSon;  
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

module.exports = commentSon;