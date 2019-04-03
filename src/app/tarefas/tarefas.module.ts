import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
  providers: [
    TarefaService,
  ]
})
export class TarefasModule { }
