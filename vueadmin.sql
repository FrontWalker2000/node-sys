/*
 Navicat Premium Data Transfer

 Source Server         : self-vue
 Source Server Type    : MySQL
 Source Server Version : 80024
 Source Host           : localhost:3306
 Source Schema         : vueadmin

 Target Server Type    : MySQL
 Target Server Version : 80024
 File Encoding         : 65001

 Date: 23/05/2021 19:35:20
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userName` char(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` char(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `uid` char(9) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

SET FOREIGN_KEY_CHECKS = 1;
