import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from "./product-list.component"
import {ProductDetailComponent} from "./product-detail.component";
import {ProductService} from "./product.service"
import {ConvertToSpacesPipe} from "../shared/convert-to-spaces.pipe";

import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ProductGuardService} from "./product-guard.service";
import { SharedModule } from './../shared/shared.module'

@NgModule({
  imports: [
    CommonModule // this import to can use ngif and ng-for we can use it in the app.module because in the 
    // app.module we import browser module witch in turn import and export CommonModule
    
    ,
      FormsModule,
      RouterModule.forChild([
          {path: 'products', component: ProductListComponent},
          {path: 'product/:id',
            canActivate:[ProductGuardService ]
          ,component: ProductDetailComponent},
      ]),
      SharedModule
  ],
  declarations: [
      ProductListComponent,
      ProductDetailComponent,
      
  ],
  providers:[
      ProductService,
      ProductGuardService,
  ]
})
export class ProductModule { }
