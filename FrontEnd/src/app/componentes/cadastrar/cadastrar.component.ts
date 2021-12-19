import { Component, OnInit } from '@angular/core';

// IMPORTANDO O MODELO DO CLIENTE.SERVICE
import { Cliente, ClienteService } from 'src/app/servicos/cliente.service';

// IMPORTANDO BIBLIOTECA DE ROTAS DO ANGULAR
import { Router } from '@angular/router';



@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  cliente:Cliente = {
    id_transferencia: '',
    nomeCliente: '',
    contaCliente: '',
    valor: ''
  }

  constructor(private ClienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  adicionar(){

    delete this.cliente.id_transferencia


    this.ClienteService.addCliente(this.cliente).subscribe({

      next: (result) => console.log(result),
      error: (err) => console.error(err),
      complete: () => console.info('Completo com succeso')
    })

    this.router.navigate(['/inicio'])
  }

}
