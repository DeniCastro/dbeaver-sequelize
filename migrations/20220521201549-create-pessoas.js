'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
      await queryInterface.createTable('pessoas', { 
       id: {
         type: Sequelize.INTEGER,
         autoIncrement: true,
         allowNull: false, // Auto incrementa, coluna obrigatória
         primaryKey: true
       },
       nome: Sequelize.STRING(250),
       email: Sequelize.STRING(250),
       data_nascimento: Sequelize.DATEONLY,
       });
  },

  async down (queryInterface, Sequelize) {     // Caso queira reverter uma migration
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('pessoas');
  }
};
