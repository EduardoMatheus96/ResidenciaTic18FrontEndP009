import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { F006Component } from './f006/f006.component';
import { F007Component } from './f007/f007.component';
import { F008Component } from './f008/f008.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    F006Component,
    F007Component,
    F008Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
