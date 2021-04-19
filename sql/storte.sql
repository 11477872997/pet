/*
 Navicat Premium Data Transfer

 Source Server         : 远程
 Source Server Type    : MySQL
 Source Server Version : 80023
 Source Host           : 8.129.209.91:3306
 Source Schema         : pet

 Target Server Type    : MySQL
 Target Server Version : 80023
 File Encoding         : 65001

 Date: 19/04/2021 18:42:43
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for storte
-- ----------------------------
DROP TABLE IF EXISTS `storte`;
CREATE TABLE `storte`  (
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '商家id',
  `usernmae` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '商家名',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `img` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '头像',
  `place` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '地理位置',
  `source` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '授权来源',
  `StoreImage` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '店铺页面',
  `DetailedAddress` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '详细地址',
  `ShopName` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '店铺名称',
  `ShopIntroduction` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '店铺简介',
  `phoneNumber` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '电话号码',
  `Storelongitude` decimal(65, 10) NOT NULL COMMENT '商家经度',
  `Storelaitude` decimal(65, 10) NOT NULL COMMENT '商家纬度',
  `StoreTime` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '经营时间',
  `Storemanage` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '经营项目',
  `UserType` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户类型',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
