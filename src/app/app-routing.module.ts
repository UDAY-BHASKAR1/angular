import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormValidationsComponent } from './form-validations/form-validations.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ArrayReactformComponent } from './array-reactform/array-reactform.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  
  
    {path:"userregister",component:UserRegisterComponent},
    {path:"reactiveform",component:ReactiveformComponent},
    {path:"formvalidations",component:FormValidationsComponent},
    {path:"shoppingcart",component:ShoppingCartComponent},
    {path:"arrayreactform",component:ArrayReactformComponent},
    {path:"gallery",component:GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
