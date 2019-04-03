import { Component, OnInit } from '@angular/core';

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];                           // atributo para armazenar o array de tarefas

  constructor(private tarefaService: TarefaService) {}

  ngOnInit() {        // se não tivesse essa tarefa o angular renderiza ela sem conteúdo para não quebrar o código
  	this.tarefas = this.listarTodos();
  }

  
  listarTodos(): Tarefa[] {                          // retorna uma lista de tarefas
  	return this.tarefaService.listarTodos();
  }


  /*
  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')) {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa): void {
    if (confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?')) {
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }
*/


}
