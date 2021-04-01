'use strict';
const {Sequelize,DataTypes, database} = require('./connexion');

const Tchat = database.define('Tchat', {
    idUser: {
        type:DataTypes.INTEGER,
        foreignKey: true,
        onDelete: 'CASCADE',
        references: {
            model: 'users',
            key: 'id'
        },
    }, 
    content: DataTypes.STRING,
    attachment: DataTypes.STRING,
}, {
    Sequelize,
    modelName: 'Tchat',
    paranoid: false
}, {
    classMethods: {
        associate: function(models) {
            models.Tchat.belongsTo(models.User, {
                as:"User",
                foreignKey: {
                    name: foreign_tchat,
                    allowNull:false,
                },
                onDelete: 'CASCADE'
            }),
            models.Tchat.hasMany(models.Comment, { onDelete: 'cascade' })
        },    
    }    
});

Tchat.sync({alter:true})
module.exports = Tchat;





