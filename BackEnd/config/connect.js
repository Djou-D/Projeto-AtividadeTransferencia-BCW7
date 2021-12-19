// VARIAVEL PARA INSTANCIAR O PACOTE DO MYSQL
const mysql = require('mysql')
const connect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Hell0-Hell0', //Lembrar de Apagar a senha.
  port: 3306,
  database: 'db_transferencia'
})

connect.connect((erro) => {
  if(erro) throw erro

  console.log('Estamos conectados!')
})

module.exports = connect