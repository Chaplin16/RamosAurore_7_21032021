'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        onDelete: 'CASCADE',
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
        unique:true,  
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique:true
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      job: {
        allowNull: true,
        type: Sequelize.STRING
      },
      avatar: {
        allowNull: true,
        type: Sequelize.STRING
      },
      isAdmin: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};