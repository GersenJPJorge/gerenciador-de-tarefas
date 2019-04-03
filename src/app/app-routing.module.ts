import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefaRoutes } from './tarefas';

export const routes: Routes = [
	{ 
		path: '',                                   // na inicialização ou se não for digitado nada na url
		redirectTo: '/tarefas/listar', 
		pathMatch: 'full'                           // passa a url completa
	},
	...TarefaRoutes                               // recurso do typescript que permite concatenar arrays
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],  // forRoot indica que ele é único, que controlará todos as rotas da aplicação
  exports: [ RouterModule ]                   // com o exporte ele fica disponível para o módulo principal
})
export class AppRoutingModule {}
