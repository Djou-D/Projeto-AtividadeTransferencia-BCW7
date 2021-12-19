import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// importando da biblioteca http as rotinas httpClienteModule
import { HttpClientModule } from '@angular/common/http';

// importando a biblioteca forms que possibilita realizarmos rotinas com os formularios
import { FormsModule } from '@angular/forms';



import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CadastrarComponent } from './componentes/cadastrar/cadastrar.component';
import { EditarComponent } from './componentes/editar/editar.component';


// IMPORTES PARA O PIPE
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt)


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    CadastrarComponent,
    EditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [

     // transformando os pipes na norma Brasileira
     {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
