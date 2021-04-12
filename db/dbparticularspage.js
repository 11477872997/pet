/**
 * 宠物圈点击当前评论与评论接口sql
 */
const query =require('../config/mysql');  //连接数据库
let dbparticularspage = function(DunamicId) {
  // let _sql = `select  b.usernmae ,a.CommentContent ,c.usernmae replyname, a.CommentTime
  // from comment  a inner join user b on a.id = b.id  INNER JOIN USER c  on c.id = a.replyid
  // where a.DunamicId = '${DunamicId}'
  // order by a.CommentTime  desc
  // `
  

  let _sql = `
  select (select  usernmae from user c WHERE c.id = t.replyId) AS replyIdname,t.replyId,  t.CommentContent ,t.CommentTime, a.usernmae ,a.id,a.img
    from comment t, user a  
    WHERE  a.id = t.CommentId 
    and  t.DunamicId = '${DunamicId}'
    order by t.CommentTime  desc
  `

  //  let _sql = `  select   b.usernmae ,a.CommentContent ,a.replyId, a.CommentTime 
		// 		from comment  a
		// 		inner join user b 
		// 		on a.CommentId = b.id
  //         where a.DunamicId = '${DunamicId}'
  //         order by a.CommentTime  desc
  // `


  return query( _sql,__filename)
}




// select comment.*,user.usernmae from comment
//   inner join user
//   on comment.CommentId = user.id
//   where DunamicId = '1617942039820-b0f8wm3cv2i' 
//   and comment.replyid = '0'
//   order by comment.CommentTime desc



//   select (select  c.usernmae from user c WHERE c.id = t.replyId)  as replyIdname ,t.replyId,  t.CommentContent ,t.CommentTime, a.usernmae ,a.id,a.img
//     from comment t, user a  
//     WHERE  a.id = t.CommentId 
//     and  t.replyid != '0'
//     and  t.DunamicId = '1617942039820-b0f8wm3cv2i'
//     order by t.CommentTime  desc



module.exports = dbparticularspage;
