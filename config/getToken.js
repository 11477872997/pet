/**
 * toeken 配置
 */
const getToken = require('jsonwebtoken');
const Config = require('../config/config');
exports.verToken = function (token) {
    return new Promise((resolve, rejece) => {
        const info = getToken.verify(token.split(' ')[1], Config.jwtSecret);
        resolve(info);
    })
}