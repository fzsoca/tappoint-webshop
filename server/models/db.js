const Sequelize = require('sequelize')

const UserModel = require('./user')
const OrderModel = require('./order')
const MenuItemModel = require('./menuItem')

const config = require('../config')

var db = {}

//In production, we can get these from env variable
const sequelize = new Sequelize(config["db-name"], config["db-user"], config["db-password"], {
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

MenuItem.belongsToMany(Order, {through: OrderMenuItem, foreignKey: 'menuItemId', constraints: false})
Order.belongsToMany(MenuItem, {through: OrderMenuItem, foreignKey: 'orderId', constraints: false})

db.User = User
db.MenuItem = MenuItem
db.Order = Order

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db