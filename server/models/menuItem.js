
module.exports = (sequelize, type) =>
{
    return sequelize.define
    ('MenuItem', 
        {
           id:
           {
             type: type.INTEGER(11),
             field: 'id',
             primaryKey: true,
             autoIncrement: true
           },
            category: 
            {
                type: type.STRING,
                field: 'Category',
                allowNull: false,
                default: ''
            },
            description: 
            {
                type: type.STRING,
                field: 'Description',
                allowNull: true,
                default: ''
            },
            name: 
            {
                type: type.STRING,
                field: 'Name',
                allowNull: false,
                default: ''
            },
            price: 
            {
                type: type.INTEGER,
                field: 'Price',
                allowNull: false
            },
            spicy: 
            {
                type: type.BOOLEAN,
                field: 'Spicy',
                allowNull: true,
                default: null
            },
            vegetarian: 
            {
                type: type.BOOLEAN,
                field: 'Vegatarian',
                allowNull: true,
                default: null
            },
            
        }, 
        {
            timestamps: false,
            modelName: 'menuItem',
            tableName: 'MenuItems',
        }
    ) 
}
