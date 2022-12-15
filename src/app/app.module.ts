import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ArrayReactformComponent } from './array-reactform/array-reactform.component';
import { CrudOperatorsComponent } from './crud-operators/crud-operators.component';
import { StackblizzComponent } from './stackblizz/stackblizz.component';
@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    UserRegisterComponent,
    HeaderComponent,
    ReactiveformComponent,
    ArrayReactformComponent,
    CrudOperatorsComponent,
    StackblizzComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
