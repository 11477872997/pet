/**
 * 宠物圈当前评论的回复
 */
 const query =require('../config/mysql');  //连接数据库
 let dbthisreply = function(discussid,replyId) {
         let _sql = `
         SELECT (select  usernmae from user c WHERE c.id = t.replyId) AS replyIdname, t.replyId,  t.CommentContent ,t.CommentTime, u.usernmae ,u.id,u.img
		from comment t , user u 
		WHERE u.id = t.id 
		AND t.discussid = '${discussid}'
		and t.replyId = '${replyId}'
		order by t.CommentTime  desc
          `


  //      let _sql =      ` SELECT (select  usernmae from user c WHERE c.id = t.replyId) AS replyIdname, t.replyId,  t.CommentContent ,t.CommentTime, u.usernmae ,u.id,u.img
		// from comment t , user u 
		// WHERE u.id = t.id 
		// AND t.discussid = '${discussid}'
		// and t.replyId != '1'
		// order by t.CommentTime  desc`
         return query( _sql,__filename);
 }
 let dbthisreplylinst = function(discussid) {
    

       let _sql =      ` SELECT (select  usernmae from user c WHERE c.id = t.replyId) AS replyIdname, t.replyId, t.CommentId ,  t.CommentContent ,t.CommentTime, u.usernmae ,u.id,u.img
		from comment t , user u 
		WHERE u.id = t.id 
		AND t.discussid = '${discussid}'
		and t.replyId != '1'
		order by t.CommentTime  desc`
         return query( _sql,__filename);
 }
 module.exports = {dbthisreply,dbthisreplylinst}
 
 