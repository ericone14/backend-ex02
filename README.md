Situação-Problema Uma empresa precisa de um servidor simples em Node.js para testes de serviços. O servidor deverá: • Rodar na porta 3055 • Possuir uma pasta chamada controller • Dentro dela deverão existir rotas diferentes para serviços específicos Os serviços solicitados são:

Rota /usuario Deverá retornar uma lista JSON contendo os campos: • id • nome • rg Exemplo esperado: [ { "id":1, "nome":"Carlos", "rg":"1234567" }, { "id":2, "nome":"Maria", "rg":"9876543" } ]

Rota /site Deverá mostrar um texto com duas linhas apresentando informações sobre o site. Exemplo: Bem-vindo ao servidor Node.js Este é um exemplo de rota simples.

Rota /calculo/:valor Deverá receber um valor como parâmetro na URL e retornar o valor elevado ao quadrado. Exemplo de chamada: http://localhost:3055/calculo/5 Resultado esperado: O valor 5 elevado ao quadrado é 25

E — Execução O aluno deverá realizar as seguintes etapas:

Criar uma pasta chamada servidor-node
Inicializar o projeto com npm init
Instalar o Express
Criar a pasta controller
Criar os arquivos de rotas
Criar o servidor principal
