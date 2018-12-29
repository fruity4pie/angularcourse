//Здесь настраиваются и собираются все модули воедино(http, forms....etc)

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComonent } from './components/myfirstcomponent/myfirstcomponent.component';
import { TodoComponent } from './components/todo/todo.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ //Здесь инициализируются компоненты, которые используются в приложении
    AppComponent,
    // MyFirstComonent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
