import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import {ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe'
import {StarComponent} from './shared/star.component'
import {ProductListComponent} from './products/product-list.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductDetailComponent } from './products/product-detail.component';
import {RouterModule} from "@angular/router";
import {WelcomeComponent} from "./home/welcome.component";
//import { ProductGuardService } from './products/product-guard.service';
import { ProductModule } from './products/product.module'

@NgModule({
  declarations: [
    AppComponent,   
    WelcomeComponent,
      
      
  ],
  imports: [
    BrowserModule,
    //FormsModule,//this for we can use ngModel
    HttpClientModule,
    RouterModule.forRoot([
        /*{path: 'products', component: ProductListComponent},
        {path: 'product/:id',
            canActivate:[ProductGuardService ]
          ,component: ProductDetailComponent},*/
        {path: 'welcome', component: WelcomeComponent},
        {path: '', redirectTo: "welcome", pathMatch:'full'},//to redirect to welcome component as a home page
        {path: '**', redirectTo: 'welcome', pathMatch:'full'}// its better to redirect ro pagenot found or to 404 page
    ]),
    ProductModule
  ],
  providers: [
    //ProductGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
