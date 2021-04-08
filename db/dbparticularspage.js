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
  

  let _sql = `select  b.usernmae ,a.CommentContent , a.CommentTime
  from comment  a inner join user b on a.CommentId = b.id 
  where a.DunamicId = '${DunamicId}'
  order by a.CommentTime  desc
  `
  return query( _sql,__filename)
}

module.exports = dbparticularspage;
