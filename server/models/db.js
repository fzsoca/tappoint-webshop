const Sequelize = require('sequelize')

const UserModel = require('./user')
const OrderModel = require('./order')
const MenuItemModel = require('./menuItem')

const db = {}

//TODO get parameters from config file or .env variable
const sequelize = new Sequelize('tappoint', 'tappoint-db-user', 'm3m3nt0_m0r1', {
    host: 'localhost',
    dialect: 'mysql'
})

const User = UserModel(sequelize, Sequelize)
const MenuItem = MenuItemModel(sequelize, Sequelize)
const Order = Order(sequelize, Sequelize)

const OrderMenuItem = sequelize.define('OrderMenuItem', {})
//TODO what is unique
MenuItem.belongsToMany(Order, {through: OrderMenuItem, unique: false})
Order.belongsToMany(MenuItem, {through: OrderMenuItem, unique: false})
Order.belongsTo(User)

db.User = User
db.MenuItem = MenuItem
db.Order = Order

module.exports = db