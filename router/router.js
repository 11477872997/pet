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
const thisPage = require('../api/thisPage.js');
const fliename = require('../api/fliename.js');
const ifStorte = require('../api/ifStorte.js');
const longitude = require('../api/longitude.js');
const comment = require('../api/comment.js');
const inquireComment = require('../api/inquireComment.js');
const reply = require('../api/reply.js');
const commentSon = require('../api/commentSon.js');
const ifusername = require('../api/ifusername.js');
const stotemap = require('../api/stotemap.js');
const userindexlist = require('../api/userindexlist.js');
const thisindexstore = require('../api/thisindexstore.js');

router.post('/fliename',fliename);  //公共-上传文件/图片等接口--插入
router.post('/insertUser',insertUser);  //小程序-授权-用户插入接口--插入
router.post('/insertStorte',insertStorte);  //小程序-授权-商家注册接口
router.post('/ifStorte',ifStorte);  //小程序-公共-判断用户与商家是否存在的接口--查询
router.post('/tokenStorte',tokenStorte); //H5-商家登陆接口--登陆
router.post('/dunamic',dunamic);    //小程序-宠物圈-发表动态接口--插入
router.post('/dunamicList',dunamicList);  //小程序-宠物圈-动态查询列表接口--查询
router.post('/comment',comment);  //小程序-宠物圈-当前评论--插入
router.post('/inquireComment',inquireComment); //小程序-宠物圈-当前动态评论列表--0一级--查询
router.post('/reply',reply);  //小程序-宠物圈-当前的评论的评论/回复 --插入
router.post('/commentSon',commentSon);  //小程序-宠物圈-当前动态评论的评论列表--二级-1--查询
router.post('/ifusername',ifusername);//小程序 判断是否有该商家名--查询
router.post('/thisPage',thisPage);   //小程序-宠物圈-查询当前详情页接口--查询
router.post('/longitude',longitude);  //小程序-公共-获取经纬度接口--插入
router.post('/stotemap',stotemap);  //小程序地图找店--查询
router.post('/userindexlist',userindexlist);  //小程序地图找店--查询

router.post('/thisindexstore',thisindexstore);  //小程序首页列表当前商家--查询





module.exports = router


