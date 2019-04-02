import { Injectable } from '@angular/core';
import { Tarefa } from '.';

// import { Tarefa } from './';

@Injectable()
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[] {
    // o localstorage é um array do tipo chave,valor que está disponível pelo navegador
    // o const  serve para variáveis ou constantes que não serão modificadas ao longo do código
  const tarefas = localStorage['tarefas'];
  // ? e : são operadores ternários (if else)
  // se retornar algo em tarefas eu uso o jsonparse e retorno minha lista de tarefas, senão retorna um array vazio
  return tarefas ? JSON.parse(tarefas) : [];
  // o localStorage trabalha com formato texto, e nós trabalhamos com formato objeto json.
  // quando for persistir teremos que fazer ao contrario. o json.parse é nativo do navegador, logo não precisa importar nada
  }

  // é void porque não retorna nada
  cadastrar(tarefa: Tarefa): void {
  	const tarefas = this.listarTodos();
  	tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    // o push adiciona ao final da lista
    localStorage['tarefas'] = JSON.stringify(tarefas);
    // fazendo ao contrario, pegando do json e jogando em localstorage
  }

  /*
  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }
*/

  /*
  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => { 
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
*/

  /*
  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
*/

  /*
  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => { 
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
*/
}
