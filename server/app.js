var express = require('express');
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var cors = require('cors')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var menuItemsRouter = require('./routes/menuItems')
var ordersRouter = require('./routes/orders')

var app = express()

app.use(cors({
  origin:'http://localhost:4200'
}))

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/menuItems', menuItemsRouter)
app.use('/orders', ordersRouter)

module.exports = app
