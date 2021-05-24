let express = require('express');
let router = express.Router();
let Jwt = require('../sever/jwt')
let handleSql = require('../sever/database')
let querySql = 'select * from user'
let insertSql = 'insert into user set ?'

/* 登陆接口 */
router.get('/login', function(req, res, next) {
  handleSql(querySql, null,(response) => {
    let result = {
      status: 0,
      data: response,
      message: "操作成功"
    }
    res.send(result);
  })
});

router.post('/login', function(req, res, next) {
  let {userName, password} = req.body
  handleSql('SELECT uid FROM user WHERE userName = ? and password = ?', [userName, password], (response) => {
    let val = response[0].uid
    let jwt = new Jwt(val)
    let token = jwt.generateToken()
    let result = {
      status: 0,
      data: token,
      message: "操作成功"
    }
    res.send(result);
  })
});

module.exports = router;