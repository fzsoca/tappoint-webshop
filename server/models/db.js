const Sequelize = require('sequelize')

const UserModel = require('./user')
const OrderModel = require('./order')
const MenuItemModel = require('./menuItem')

var db = {}

//TODO get parameters from config file or .env variable
const sequelize = new Sequelize('tappoint', 'tappoint-db-user', 'm3m3nt0_m0r1', {
    host: 'localhost',
    dialect: 'mysql'
})

var User = UserModel(sequelize, Sequelize)
var MenuItem = MenuItemModel(sequelize, Sequelize)
var Order = OrderModel(sequelize, Sequelize)


var OrderMenuItem = sequelize.define('OrderMenuItem', 
{
    menuItemId:
    {
        type: Sequelize.INTEGER(11)
    },
    orderId: 
    {
        type: Sequelize.INTEGER
    },
    quantity: Sequelize.INTEGER
})

//TODO what is unique
MenuItem.belongsToMany(Order, {through: OrderMenuItem, foreignKey: 'menuItemId', constraints: false})
Order.belongsToMany(MenuItem, {through: OrderMenuItem, foreignKey: 'orderId', constraints: false})

db.User = User
db.MenuItem = MenuItem
db.Order = Order

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db