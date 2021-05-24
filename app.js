let createError = require('http-errors'),
    express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    Jwt = require('./sever/jwt'),
    indexRouter = require('./routes/index'),
    usersRouter = require('./routes/users'),
    app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

//解决跨域问题
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('Content-Type', 'application/json;charset=utf-8')
    next()
})
// 校验token
app.use(function (req, res, next) {
    // 分离登陆路由
    if (req.url !== '/users/login') {
        let token = req.headers.authorization
        let jwt = new Jwt(token)
        let result = jwt.verifyToken()
        if (result === 'err') {
            res.send({status: 403, msg: '登录已过期,请重新登录'})
        } else {
            next()
        }
    } else {
        console.log(9999)
        next()
    }
})
app.use('/', indexRouter)
app.use('/users', usersRouter)

app.use(function (req, res, next) {
    next(createError(404))
});

app.use(function (err, req, res, next) {
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}
    res.status(err.status || 500)
    res.render('error')
});

app.listen(3000, () => {
    console.log('server start')
});
