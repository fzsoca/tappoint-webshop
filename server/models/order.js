module.exports = (sequelize, type) =>
{
    return sequelize.define
    ('Order',
        {
           
            name:
            {
                type: type.STRING,
                allowNull: false
            },
            phone:
            {
                type: type.STRING,
                allowNull: false
            },
            address:
            {
                type: type.STRING,
                allowNull: false
            }
            
        }
    ) 

}