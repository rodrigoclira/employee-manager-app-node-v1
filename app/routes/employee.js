 /*
 * Arquivo: routes/employee.js
 * Author: Glaucia Lemos
 * Updated by: Rodrigo Lira
 * Description: Arquivo responsável pelas rotas das APIS
 * Data: 13/02/2017
 * Updated by (Date): 23/01/2021
 */

var sequelize = require('sequelize');
const { Op } = require("sequelize");

var Employee = require('../models/employee');

/* 1) Método: Selecionar Funcionários (acessar em: GET http://localhost:8000/employee */
    function selecionarTodosFuncionarios(req, res) {
        //Aqui estamos definindo a query do banco para que possa retornar todos os funcionários:
        Employee.findAll().then(function (employee) {
            res.json(employee);
        });
    }

/* 2) Método: Criar Funcionário (acessar em: POST http://localhost:8000/employee) */
    function adicionarFuncionario(req, res) {

        //Aqui estaremos salvando todos os campos na base de dados:
        Employee.create(
            {
                name: req.body.name,
                email: req.body.email,
                department: req.body.department
            }
        ).then(function (employee){
            res.json({ message: "Funcionário adicionado com Sucesso!", employee});
        }).catch(function(err){
            res.status(200);
            console.log({ errors: err });
            res.json({ errors: err });
        })

    }

/** 3)  Método: Selecionar Por Id (acessar em: GET http://localhost:8000/employee/:id ) */
    function selecionarFuncionarioPorId(req, res) {
            Employee.findAll(
                {
                    where: { id: req.params.id}
                }).then(function (employee) {
                console.log(employee)
                res.json(employee);
            });
    }

/** 4) Método: Excluir (acessar em: http://localhost:8000/employee/:id ) */
    function excluirFuncionario(req, res) {
        Employee.destroy({
              where: {
                id: req.params.id
              }
          });

        res.json({ message: "Funcionário removido com sucesso!"});
    }

/* 5) Método: Atualizar (acessar em: PUT http://localhost:8000/employee/:id ) */
    function atualizarFuncionario(req, res) {
        //Para que eu possa atualizar um Funcionário, preciso primeiramente encontrar o id do Funcionário que desejo atualizar:
        Employee.update({
                name: req.body.name,
                email: req.body.email,
                department: req.body.department
             }, {
            where: {
                id: req.params.id
            }
           }).then(function (employee){
            res.json({ message: "Funcionário atualizado com Sucesso!"});

        });
    }

//Aqui iremos exportar todas as funções criadas acima:
module.exports = { selecionarTodosFuncionarios, adicionarFuncionario, selecionarFuncionarioPorId, excluirFuncionario, atualizarFuncionario };
