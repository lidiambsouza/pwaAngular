import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroSeguroComponent, ListarSegurosComponent} from './components';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'cadastro'}
  {path:'cadastro', component: CadastroSeguroComponent},
  {path:'listar', component: ListarSegurosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
