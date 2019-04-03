import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditarTarefaComponent } from './editar';

@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
  ],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
  ],
  providers: [
    TarefaService,
  ]
})
export class TarefasModule { }
