/**
 * Arquivo: models/employee.js
 * Author: Glaucia Lemos
 * Updated by: Rodrigo Lira
 * Description: Arquivo responsável pelo modelo do 'Employee' para realizar a conexão com a base
 *  de dados via sequelize.
 * Updated by (Date): 23/01/2021
 */

 const Sequelize = require('sequelize');

 //CONEXÃO COM O BANCO
 const sequelize = new Sequelize({
   dialect: 'sqlite',
   storage: 'database.sqlite'
});

const employee_model = sequelize.define('employee',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    department: {
      type: Sequelize.STRING,
      allowNull: false,
  }},
  {
      // don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false

  })

employee_model.sync();
console.log("If not exist, the table for the Employee model was just created!");

//Aqui realizará a exportação do 'EmployeeModel' para usar em qualquer lugar:
module.exports = employee_model
