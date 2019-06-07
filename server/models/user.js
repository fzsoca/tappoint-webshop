module.exports = (sequelize, type) =>
{
    return sequelize.define
    ('User',
        {
            email: 
            {
                type: type.STRING,
                allowNull: false
            },
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
            },
            passwordHash:
            {
                type: type.STRING,
                allowNull: false
            }
        }
    ) 

}