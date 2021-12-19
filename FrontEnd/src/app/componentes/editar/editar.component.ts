import { Component, OnInit } from '@angular/core';

import { Cliente, ClienteService } from 'src/app/servicos/cliente.service';
// ActivatedRoute, permite pegar a rota ativa no momento.
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  // FUNÇÃO/MODELO
  cliente:Cliente = {
    id_transferencia: '',
    nomeCliente: '',
    contaCliente: '',
    valor: ''
  }

  constructor(private ClienteService:ClienteService,
              private router:Router,
              private activatedRoute:ActivatedRoute) { }


  //ngOnInit() = Quando o componente for iniciado
  ngOnInit(): void {

     // A variavel recebe um valor de qualquer tipo <any>, do activateRoute da class, o snapshot pega o parametro que foi passado na rota
    const edit_id = <any>this.activatedRoute.snapshot.params['id'];

    // console.log('o id é: ' + edit_id)

    this.ClienteService.getUmCliente(edit_id).subscribe({
      next: (result) => {console.log(result), this.cliente = result},

      error: (err) => console.error(err),
      complete: () => console.info('Cliente Encontrado')
    })
  }


  // FUNÇÃO PARA EDITAR UM CLIENTE
  editar(){
    // dentro da class ClienteService chama a função editCliente, que requer dois parametros o id da transferencia e os campos que vão ser alterados
    this.ClienteService.editCliente(this.cliente.id_transferencia, this.cliente).subscribe({

      next: (result) => console.log(result),
      error: (err) => console.error(err),
      complete: () => console.info('Edição feita com sucesso')
    });
    // Redireciona a rota inicial do projeto
    this.router.navigate(['/inicio'])
  }

}
