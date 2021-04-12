/**
 * 评论与回复接口 sql
 */
const query =require('../config/mysql');  //连接数据库
let dbcomment = function(CommentId,DunamicId,id,CommentContent,replyId,CommentTime) {
        let _sql = `insert into comment(CommentId,DunamicId,id,CommentContent,replyId,CommentTime) VALUES (
            '${CommentId}','${DunamicId}','${id}','${CommentContent}','${replyId}','${CommentTime}' )   `;
       return query( _sql,__filename);
}
let dbreply = function(CommentId,DunamicId,id,CommentContent,replyId,CommentTime,discussid) {
        let _sql = `insert into comment(CommentId,DunamicId,id,CommentContent,replyId,CommentTime,discussid) VALUES (
            '${CommentId}','${DunamicId}','${id}','${CommentContent}','${replyId}','${CommentTime}','${discussid}' )   `;
       return query( _sql,__filename);
}
module.exports = {dbcomment,dbreply}
