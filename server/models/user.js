module.exports = (sequelize, type) =>
{
    return sequelize.define
    ('User',
        {
            email: 
            {
                type: type.STRING,
                allowNull: false,
                unique: true
            },         
            passwordHash:
            {
                type: type.STRING,
                allowNull: false
            }
        }
    ) 

}