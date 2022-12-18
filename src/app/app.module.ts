import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ArrayReactformComponent } from './array-reactform/array-reactform.component';

import {FormValidationsComponent} from './form-validations/form-validations.component';
import { GalleryComponent } from './gallery/gallery.component'
@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    UserRegisterComponent,
   
    ReactiveformComponent,
    ArrayReactformComponent,
    FormValidationsComponent,
    GalleryComponent,
    
    
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
