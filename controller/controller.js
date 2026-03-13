const express = require("express");
const app = express.Router();
app.use(express.json())

const Service = require("../service/service.js")
const service = new Service()

app.get("/funcionarios", (req, res) => {
    let listaFuncionarios = service.getFuncionarios()
    res.json(listaFuncionarios)
})

app.get("/funcionarios/:id", (req, res) => {
    const id = req.params.id
    try {
        const resId = service.getFuncionariosById(id)
        res.status(200).json(resId)
    } catch(erro) {
        res.status(404).json({erro: erro.message})
    }
})

app.post("/funcionarios", (req, res) => {
    try {
        const Requisicao = req.body
        const Resposta = service.addFuncionario(Requisicao)
        res.status(201).json({resposta: Resposta})
    } catch(erro){
        res.status(400).json({erro: erro.message})
    }
})

app.put("funcionarios/:id", (req, res) => {
    try {
        let id = req.params.id
        let Requisicao = req.body
        const Resposta = service.editarFuncionario(id, Requisicao)
        res.status(200).json({msg: Resposta})
    } catch(erro){
        res.status(400).json({erro: erro.message})
    }
})

app.delete("funcionarios/:id", (req, res) => {
    try {
        let id = req.params.id
        const Resposta = service.deletarFuncionario(id)
        res.status(200).json({msg: Resposta})
    } catch (erro) {
        res.status(400).json({erro: erro.message})
    }
})









module.exports = app