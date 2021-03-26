-- 创建数据库
create database pet;

use pet;
-- 创建用户表

create table user(
    id varchar(255) not null PRIMARY KEY  COMMENT '用户id',
    usernmae varchar(255) not null   COMMENT '用户名',
    img varchar(500) not null  COMMENT '头像',
    place varchar(255) not null  COMMENT '地理位置',
    source char(255) not null  COMMENT '授权来源',
    userlongitude  varchar(255) not null  COMMENT '用户经度',
    userlaitude varchar(255) not null  COMMENT '用户纬度');

-- 创建商家表

create table storte(
id varchar(255) not null PRIMARY KEY  COMMENT '商家id',
usernmae varchar(255) not null COMMENT '商家名',
password varchar(255) not null COMMENT '密码',
img varchar(500) not null COMMENT '头像',
place varchar(255) not null COMMENT '地理位置',
source char(255) not null COMMENT '授权来源',
StoreImage varchar(500) not null COMMENT '店铺页面',
DetailedAddress varchar(500) not null COMMENT '详细地址',
ShopName char(255) not null COMMENT '店铺名称', 
ShopIntroduction varchar(500) COMMENT '店铺简介',
phoneNumber varchar(255) not null COMMENT '电话号码',
Storelongitude varchar(255) not null COMMENT '商家经度',
Storelaitude varchar(255) not null COMMENT '商家纬度'
);


-- 宠物圈 
--动态表
create table dunamic(
DunamicId varchar(255) not null PRIMARY KEY COMMENT '动态id',
id varchar(255) not null COMMENT '用户id',
DuamincContent varchar(500) not null COMMENT '动态内容',
DuaminTime datetime  COMMENT '动态时间',
DuaminImg varchar(500)  COMMENT '动态图片'
);

