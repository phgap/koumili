'use strict';
// const expressJWT = require('express-jwt-2')
const jwt = require('jsonwebtoken');
const { secret } = require('../../config/jwt.config.json')
module.exports = {
    login: login
};
const users = [{
    id: 1,
    username: 'test',
    password: 'test',
    firstName: 'Test',
    lastName: 'User'
}];

function login(req, res) {
    // let token = req.swagger.params.authentication.value;

    /************************************
     *  
     * TODO: 读取数据库，验证登陆信息
     * 
     ***********************************/

    const user = users.find(u => u.username === req.body.username && u.password === req.body.password);
    if (user) {
        const token = jwt.sign({ sub: user.id }, secret);
        // const { password, ...userWithoutPassword } = user;
        res.json({ result: true, token });
    } else {
        res.json({ result: false, token: "" });
    }
}
