import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ArrayReactformComponent } from './array-reactform/array-reactform.component';
import { GalleriaModule} from 'primeng/galleria';
import { FormValidationsComponent} from './form-validations/form-validations.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ButtonModule} from 'primeng/button';
import { RippleModule } from "primeng/ripple";
import { GalleryPreviewComponent } from './gallery-preview/gallery-preview.component';
import { TestService } from './test.service';
import { CheckboxModule} from 'primeng/checkbox';
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { ToastModule } from "primeng/toast";
import { ConfirmationService, MessageService } from "primeng/api";
import { DashComponent } from './dash/dash.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FilterComponent } from './filter/filter.component';
import { TableModule } from "primeng/table";





@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    UserRegisterComponent,
    ReactiveformComponent,
    ArrayReactformComponent,
    FormValidationsComponent,
    GalleryComponent,
    GalleryPreviewComponent,
    DashComponent,
    FilterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    GalleriaModule,
    ButtonModule,
    BrowserAnimationsModule,
    CheckboxModule,
    RippleModule,
    ConfirmPopupModule,
    ToastModule,
    OverlayPanelModule,
    TableModule,
    
  
    
    
    
  
  ],
  providers: [TestService,ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
