import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { VentanasdetisquizoqueComponent } from './ventanasdetisquizoque/ventanasdetisquizoque.component';
import { CiudadperdidaComponent } from './ciudadperdida/ciudadperdida.component';
import { NevadodelruizComponent } from './nevadodelruiz/nevadodelruiz.component';
import { BarralateralComponent } from './barralateral/barralateral.component';

@NgModule({
  declarations: [
    AppComponent,
    VentanasdetisquizoqueComponent,
    CiudadperdidaComponent,
    NevadodelruizComponent,
    BarralateralComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
