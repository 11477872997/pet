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