/**
 * 评论与回复接口 sql
 */
const query =require('../config/mysql');  //连接数据库
let dbdunamiclistcomment = function(CommentId ,id ,DunamicId ,CommentContent ,CommentTime,replyId) {
        let _sql = `insert into comment(CommentId,id,DunamicId,CommentContent,CommentTime,replyId) VALUES (
            '${CommentId}','${id}','${DunamicId}','${CommentContent}','${CommentTime}','${replyId}' )   `;
       return query( _sql,__filename);
}

module.exports = dbdunamiclistcomment;