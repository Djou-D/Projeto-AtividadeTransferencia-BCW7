import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// CONEXÃO COM O BACKEND
export class ClienteService {

  url = '/clientes'

  constructor(private http: HttpClient) { }

  // ESSA FUNÇÃO/METODO LISTA TODOS OS CLIENTES DO BANCO DE DADOS
  getClientes(){

    return this.http.get(this.url)
  }


  // METODO/FUNÇÃO. GET PARA UM CLIENTE
  getUmCliente(id:any){

    return this.http.get(this.url + '/' + id)
  }


  // METODO/FUNÇÃO. ADICIONANDO CLIENTES COM METODO .POST
  addCliente(cliente: Cliente){

    return this.http.post(this.url, cliente)
  }


  //METODO/FUNÇÃO. DELETAR TAREFA ATRAVEZ DO ID COM O METODO .DELETE
  delCliente(id:any){

    return this.http.delete(this.url + '/' + id)
  }


  // METODO/FUNÇÃO. MODIFICAR, EDITAR CLIENTE COM O METODO .PUT
  editCliente(id:any, cliente:Cliente){

    return this.http.put(this.url + '/' + id, cliente)
  }
}


//MODELO DE DADOS
export interface Cliente{
  id_transferencia?: string,
  nomeCliente?: string,
  contaCliente?: string,
  valor?: string
}
