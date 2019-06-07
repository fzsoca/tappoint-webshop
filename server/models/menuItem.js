
module.exports = (sequelize, type) =>
{
    return sequelize.define
    ('MenuItem', 
        {
            id:
            {
                type: type.INTEGER
            },
            category: 
            {
                type: type.STRING,
                allowNull: false,
                default: ''
            },
            description: 
            {
                type: type.STRING,
                allowNull: true,
                default: ''
            },
            name: 
            {
                type: type.STRING,
                allowNull: false,
                default: ''
            },
            price: 
            {
                type: type.INTEGER,
                allowNull: false
            },
            spicy: 
            {
                type: Sequelize.BOOLEAN,
                allowNull: true,
                default: null
            },
            vegetarian: 
            {
                type: Sequelize.BOOLEAN,
                allowNull: true,
                default: null
            },
            
        }
    ) 
}
