require('./config/connect')

const express = require('express')
const app = express()

// Para ser possivel utilizar arquivos no formato json
app.use(express.json())


// Variavel para armazenar todas as rotas definidads em rotas
const rota = require('./routs')
// Para todas as rotas definidas no arquivo rotas.js deve ser considerado o caminho /tarefas
app.use('/clientes', rota)


const porta = 3000
app.listen(porta, () => {
  console.log(`servidor rodando na porta: ${porta}`)
})