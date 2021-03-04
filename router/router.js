const Router = require('koa-router');
const router = new Router({
    prefix: '/api' //统一加个前缀
});
const options = require('../api/cj.js');


// 测试
router.get('/cj',options);



module.exports = router
