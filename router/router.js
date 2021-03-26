const Router = require('koa-router');
const router = new Router({
    prefix: '/api' //统一加个前缀
});
const options = require('../api/cj.js');
// 测试
router.get('/cj',options);

const insertUser = require('../api/insertUser.js');
const insertStorte = require('../api/insertStorte.js');
const tokenStorte = require('../api/tokenStorte.js');
const dunamic = require('../api/dunamic.js');
const dunamicList = require('../api/dunamicList.js');
const dunamiclistcomment = require('../api/dunamiclistcomment.js');

//插入用户信息
router.post('/insertUser',insertUser);
//插入商家信息
router.post('/insertStorte',insertStorte);
//商家登陆验证
router.post('/tokenStorte',tokenStorte);
//宠物圈发动态
router.post('/dunamic',dunamic);
//宠物圈动态列表
router.post('/dunamicList',dunamicList);
//宠物圈动态列表评论
router.post('/dunamiclistcomment',dunamiclistcomment);






module.exports = router


