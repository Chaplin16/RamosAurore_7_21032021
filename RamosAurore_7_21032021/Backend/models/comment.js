'use strict';
const {Sequelize,DataTypes, database} = require('./connexion');

const Comment = database.define('Comment', {
    idUser: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        references: {
            model: 'Tchats',
            key: 'idUser'
        }
    },
    comment: DataTypes.STRING
}, {
    Sequelize,
    modelName: 'Comment',
    paranoid: false
}, {
    classMethods: {
      associate: function(models) {
          models.Comment.belongsTo(models.Tchat, {
              as:"idUser",
              foreignKey: {
                  allowNull:false
              }
          },
          models.Comment.belongsTo(models.User)
          )
      }
  }
});

Comment.sync({alter:true})
module.exports = Comment;

