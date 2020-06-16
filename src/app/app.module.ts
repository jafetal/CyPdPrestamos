import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeleccionConfigComponent } from './seleccion-config/seleccion-config.component';
import { ClienteComponent } from './cliente/cliente.component';
import { LimitesComponent } from './limites/limites.component';
import { AvalesComponent } from './avales/avales.component';
import { HeaderComponent } from './header/header.component';
import { CriteriosMainComponent } from './criterios-main/criterios-main.component';

@NgModule({
  declarations: [
    AppComponent,
    SeleccionConfigComponent,
    ClienteComponent,
    LimitesComponent,
    AvalesComponent,
    HeaderComponent,
    CriteriosMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
