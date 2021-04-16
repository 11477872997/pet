/**
 * 小程序-宠物圈-当前评论--插入
 */
const query =require('../config/mysql');  //连接数据库
let dbcomment = function(CommentId,DunamicId,id,CommentContent,replyId,CommentTime) {
        let _sql = `insert into comment(CommentId,DunamicId,id,CommentContent,replyId,CommentTime) VALUES (
            '${CommentId}','${DunamicId}','${id}','${CommentContent}','${replyId}','${CommentTime}' )   `;
       return query( _sql,__filename);
}

//小程序-宠物圈-当前的评论的评论/回复 --插入
let dbreply = function(CommentId,DunamicId,id,CommentContent,replyId,CommentTime,discussid) {
        let _sql = `insert into comment(CommentId,DunamicId,id,CommentContent,replyId,CommentTime,discussid) VALUES (
            '${CommentId}','${DunamicId}','${id}','${CommentContent}','${replyId}','${CommentTime}','${discussid}' )   `;
       return query( _sql,__filename);
}
module.exports = {dbcomment,dbreply}
