const rota = require('express').Router()

const connect = require('./config/connect')

// apos instalar o body parser
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });


// ROTA PARA LISTAR OS DADOS DO DATABASE
rota.get('/', (req, res) => {
  // Query que seleciona todos os dados da tb_tarefas do banco de dados

  // order by eOcampo asc, é aplicado no fim dessa linha para ordenar a chamada ordenada a partir do campo
  let sql = 'select * from tb_cliente order by nomeCliente asc'

  connect.query(sql, (erro, rows, fields) => {

    if(erro) throw erro

    res.json(rows)
  })
})


// ROTA PARA LISTAR UM CLIENTE DE ACORDO COM O SEU ID
rota.get('/:id', (req, res) => {

  // destructor do objeto requerido
  const {id} = req.params

  // Variavel com uma query(Linha de comando) do banco de dados mysql
  let sql = 'select * from tb_cliente where id_transferencia = ?'

  connect.query(sql, [id], (erro, rows, fields) => {
    
    if(erro) throw erro 

    res.json(rows[0])
  })
})


// ROTA PARA DELETAR UM CLIENTE EXPECIFICO (através do seu id)
rota.delete('/:id', (req, res) => {
  const {id} = req.params

  let sql = `delete from tb_cliente where id_transferencia = '${id}'`

  connect.query(sql, (erro, rows, fields) => {

    if(erro) throw erro

    res.json({status: 'Sucesso ao excluir'})
  })
})


// ROTA DE INCLUSÃO, PARA INCLUIR NA TABELA DO BANCO DE DADOS
rota.post('/', urlencodedParser, (req, res)  => {
  // variavel com atributos da tabela que serão inseridos
  const {nomeCliente, contaCliente, valor} = req.body

  let sql = `insert into tb_cliente(nomeCliente, contaCliente, valor) value('${nomeCliente}', '${contaCliente}', '${valor}')`

  connect.query(sql, (erro, rows, fields) => {

    if(erro) throw erro

    res.json({status: 'Sucesso ao incluir cliente'})
  })
})


//ROTA DE EDIÇÃO .put
rota.put('/:id', urlencodedParser, (req, res) => {
  
  const {id} = req.params
  const {nomeCliente, contaCliente, valor} = req.body

  let sql = `update tb_cliente set
              nomeCliente = '${nomeCliente}',
              contaCliente = '${contaCliente}',
              valor = '${valor}'
              where id_transferencia = '${id}'`

  connect.query(sql, (erro, rows, fields) => {

    if(erro) throw erro

    res.json({status: 'Sucesso ao editar!'})
  })            
})


module.exports = rota