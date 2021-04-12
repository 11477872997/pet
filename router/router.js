/**
 *koa 路由
 */
const Router = require('koa-router');
const fs = require('fs');
const path = require('path');
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

const particularspage = require('../api/particularspage.js');
const thisPage = require('../api/thisPage.js');
const fliename = require('../api/fliename.js');
const ifStorte = require('../api/ifStorte.js');
const longitude = require('../api/longitude.js');
const comment = require('../api/comment.js');
const inquireComment = require('../api/inquireComment.js');
const reply = require('../api/reply.js');
const commentSon = require('../api/commentSon.js');


// 上传图片接口
router.post('/fliename',fliename);
//插入用户信息
router.post('/insertUser',insertUser);
//插入商家信息
router.post('/insertStorte',insertStorte);
// 判断商家接口
router.post('/ifStorte',ifStorte);
//商家登陆验证
router.post('/tokenStorte',tokenStorte);
//宠物圈发动态
router.post('/dunamic',dunamic);
//宠物圈动态列表
router.post('/dunamicList',dunamicList);
//宠物圈评论接口
router.post('/comment',comment);
//宠物圈当前动态一级评论列表接口
router.post('/inquireComment',inquireComment);
//宠物圈回复接口
router.post('/reply',reply);
//宠物圈当前动态二级评论的评论列表接口
router.post('/commentSon',commentSon);


//宠物圈 列表详情页
router.post('/thisPage',thisPage);
// 公共获取经纬度
router.post('/longitude',longitude);




//宠物圈点击当前详情评论与评论
router.post('/particularspage',particularspage);




module.exports = router


