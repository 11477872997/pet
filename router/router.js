const Router = require('koa-router');
const router = new Router({
    prefix: '/api' //统一加个前缀
});
// 首页路由



const options = require('../api/cj.js');

const insertUser = require('../api/insertUser.js');

const insertStorte = require('../api/insertStorte.js');



// 测试
router.post('/cj',options);

//插入用户信息
router.post('/insertUser',insertUser);
//插入商家信息
router.post('/insertStorte',insertStorte);




module.exports = router


