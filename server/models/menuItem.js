
module.exports = (sequelize, type) =>
{
    return sequelize.define
    ('MenuItem', 
        {
           
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
                type: type.BOOLEAN,
                allowNull: true,
                default: null
            },
            vegetarian: 
            {
                type: type.BOOLEAN,
                allowNull: true,
                default: null
            },
            
        }, 
        {timestamps: false}
    ) 
}
