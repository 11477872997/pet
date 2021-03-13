-- 创建数据库
create database pet;

use pet;
-- 创建用户表

create table user(id varchar(255),usernmae varchar(255),img varchar(500),place varchar(255),source char(255));

-- 创建商家表

create table storte(id varchar(255),usernmae varchar(255),password varchar(255),img varchar(500),place varchar(255),
source char(255),
StoreImage varchar(500),
DetailedAddress varchar(500),
ShopName char(255),
ShopIntroduction varchar(500),
phoneNumber int(11));