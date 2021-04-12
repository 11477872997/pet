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

 Date: 12/04/2021 18:52:05
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for dunamic
-- ----------------------------
DROP TABLE IF EXISTS `dunamic`;
CREATE TABLE `dunamic`  (
  `DunamicId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '动态id',
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户id',
  `DuamincContent` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '动态内容',
  `DuaminTime` datetime(0) NULL DEFAULT NULL COMMENT '动态时间',
  `DuaminImg` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '动态图片',
  PRIMARY KEY (`DunamicId`) USING BTREE,
  INDEX `id`(`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
