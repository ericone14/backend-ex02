let bd = require("../repository/bd.json")

class Service{
    
    getFuncionarios(){
        return bd
    }

    getFuncionariosById(id){
        const Funcionario = bd.find(item => item.id == id)
        if(!Funcionario){
            throw new Error(`Funcionário com o id #${id} não encontrado.`)
        }
        return Funcionario
    }

    addFuncionario(banco){
        const {funcao, cpf} = banco
        const Funcionario = {id: bd.length + 1, funcao, cpf}

        if(!nome || !email) {
            throw new Error(`Algo está errado. Tente novamente`)
        }

        if(nome == " " || email == " ") {
            throw new Error(`Preencha todos os campos`)
        }

        bd.push(Funcionario)
            return "Usuário inserido com sucesso"

    }

    editarFuncionario(id, banco){
        let Funcionario = bd.find(f => f.id == id)

        if(!Funcionario) {
            throw new Error(`Usuário com o id ${id} não encontrado.`)
        }

        Funcionario.nome = banco.nome
        Funcionario.email = banco.email
        return "Usuário editado com sucesso!"
    }

    deletarFuncionario(id) {
        let Funcionario = bd.find((f) => f.id == id)

        if(!Funcionario) {
            throw new Error(`Usuário com o id ${id} não encontrado`)
        }

        bd = bd.filter(f => f.id != id);
        return "Usuário excluído"
    }


}

module.exports = Service