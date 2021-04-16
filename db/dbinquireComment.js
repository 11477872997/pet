/**
 * 小程序-宠物圈-当前动态评论列表--0一级--查询
 */
const query =require('../config/mysql');  //连接数据库
let dbinquireComment = function(DunamicId) {
        let _sql =    `select  
                  ( SELECT count(1) as num 
                      FROM comment f ,  user a
                      WHERE f.discussid = t.CommentId
                      and f.id = a.id
                      and  f.replyId ='1') 
                  as num ,a.img,a.usernmae, t.CommentContent,t.CommentTime,t.CommentId ,t.DunamicId 
                  from comment t, user a  
                   WHERE  a.id = t.id 
                   and  t.replyid = '0'
                   and  t.DunamicId = '${DunamicId}'
                   order by t.CommentTime  desc
     `       
       return query( _sql,__filename);
}
// 小程序-宠物圈-当前动态评论的评论列表--二级-1--查询
let dbcommentSon = function(discussid) {
        let _sql = `  SELECT a.id,a.img,a.usernmae,t.CommentContent,t.CommentTime, t.CommentId
    FROM comment t ,  user a
    WHERE t.discussid = '${discussid}' 
    and t.id = a.id
    and  t.replyId ='1'
    order by t.CommentTime  desc
     `
       return query( _sql,__filename);
}
let dbSon = function(discussid,CommentId) {
        let _sql = `
    SELECT (select  usernmae from user c WHERE c.id = t.replyId) AS replyIdname, t.replyId,  t.CommentContent ,t.CommentTime, u.usernmae ,u.id,u.img
    from comment t , user u 
    WHERE u.id = t.id 
    AND t.DunamicId = '${discussid}'
    and t.replyId != '1' && t.replyId != '0'
    and t.discussid = '${CommentId}'
    order by t.CommentTime  desc
     `
       return query( _sql,__filename);
}


module.exports = {dbinquireComment,dbcommentSon,dbSon}
