import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { F006Component } from './f006/f006.component';
import { F007Component } from './f007/f007.component';
import { F008Component } from './f008/f008.component';
import { ClassesComponent } from './f007/classes/classes.component';
import { ObjetosComponent } from './f007/objetos/objetos.component';
import { PropriedadesComponent } from './f007/propriedades/propriedades.component';
import { ValorPropriedadesComponent } from './f007/valor-propriedades/valor-propriedades.component';
import { SearchJsonComponent } from './f007/search-json/search-json.component';
import { CarrinhoComponent } from './f007/carrinho/carrinho.component';
import { BarraBuscaComponent } from './f008/barra-busca/barra-busca.component';
import { HighlightPipePipe } from './f008/highlightPipe/highlight.pipe';
import { ResultadoPesquisaComponent } from './f008/resultado-pesquisa/resultado-pesquisa.component';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { WikipediaService } from './f008/Services/wikiServer/wikipedia.service';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    F006Component,
    F007Component,
    F008Component,
    ClassesComponent,
    ObjetosComponent,
    PropriedadesComponent,
    ValorPropriedadesComponent,
    SearchJsonComponent,
    CarrinhoComponent,
    BarraBuscaComponent,
    HighlightPipePipe,
    ResultadoPesquisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [
    WikipediaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
