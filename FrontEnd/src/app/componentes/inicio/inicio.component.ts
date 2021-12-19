import { Component, OnInit } from '@angular/core';

// IMPORTANDO A CLASSE CLIENTESERVICE
import { ClienteService, Cliente } from 'src/app/servicos/cliente.service';

// IMPORTANDO A FUNÇÃO DE ROTA DO ANGULAR
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  ListarClientes: Cliente[]

  constructor(private ClienteService: ClienteService, private router: Router) {

    this.ListarClientes = []
  }

  ngOnInit(): void {

    this.listarClientes()
  }


  listarClientes(){

    this.ClienteService.getClientes().subscribe({

      next: (result) => {console.log(result)
        this.ListarClientes = <any>result},

      error: (err) => console.error(err),
      complete: () => console.info('Aplicação concluida')
    })
  }

  excluir(id:any){

    this.ClienteService.delCliente(id).subscribe({

      next: (result) => {console.log('Cliente Excluido')
        this.listarClientes()},

      error: (err) => console.error(err),
      complete: () => console.info('Processo de exclusão completo')
    })
  }


  // Função que direciona a pagina do form de edição, é a rota do click ao formulario
  editar(id:any){

    this.router.navigate(['/edit/' + id])
  }

}
