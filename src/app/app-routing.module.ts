import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VentanasdetisquizoqueComponent } from './ventanasdetisquizoque/ventanasdetisquizoque.component';
import { CiudadperdidaComponent } from './ciudadperdida/ciudadperdida.component';
import { NevadodelruizComponent } from './nevadodelruiz/nevadodelruiz.component';

const routes: Routes = [
  {
    path:'ventanasdetisquizoque',
    component:VentanasdetisquizoqueComponent
  },
  {
    path:'ciudadperdida',
    component:CiudadperdidaComponent
  },
  {
    path:'ventanasdetisquizoque',
    component:NevadodelruizComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }