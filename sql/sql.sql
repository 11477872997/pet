-- 创建数据库
create database pet;

use pet;
-- 创建用户表

create table user(id varchar(255) not null PRIMARY KEY,usernmae varchar(255) not null,img varchar(500) not null,place varchar(255) not null,source char(255) not null);

-- 创建商家表

create table storte(id varchar(255) not null PRIMARY KEY,usernmae varchar(255) not null,password varchar(255) not null,img varchar(500) not null,place varchar(255) not null,
source char(255) not null,
StoreImage varchar(500) not null,
DetailedAddress varchar(500) not null,
ShopName char(255) not null, 
ShopIntroduction varchar(500),
phoneNumber varchar(255) not null);


-- 宠物圈 
--动态表
create table dunamic(DunamicId varchar(255) not null PRIMARY KEY,
id varchar(255) not null,
DuamincContent varchar(500) not null,
DuaminTime datetime ,
DuaminImg varchar(500) 
);

