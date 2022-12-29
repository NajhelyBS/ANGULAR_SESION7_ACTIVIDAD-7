import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadoComponent } from './elementos/dado/dado.component';

const routes: Routes = [{
  path:"", component:DadoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
