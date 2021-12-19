// VARIAVEL PARA INSTANCIAR O PACOTE DO MYSQL
const mysql = require('mysql')
const connect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'SenhaDoDB', //Senha removida por questões de segurança.
  port: 3306,
  database: 'db_transferencia'
})

connect.connect((erro) => {
  if(erro) throw erro

  console.log('Estamos conectados!')
})

module.exports = connect
