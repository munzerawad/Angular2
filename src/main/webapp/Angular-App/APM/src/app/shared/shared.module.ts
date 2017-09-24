import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StarComponent} from "./star.component"
import {FormsModule} from "@angular/forms";
import {ConvertToSpacesPipe} from "./convert-to-spaces.pipe"
@NgModule({
  imports: [
    //CommonModule  / no need to it because we imported and exported this module in ShardeModule
  ],
  declarations: [
      StarComponent,
      ConvertToSpacesPipe
    ],
  exports:[ // we add here the componet wich we want to export it to be avilable in anothor 
            // Module witch import this module
      StarComponent,
      CommonModule,
      FormsModule, 
      ConvertToSpacesPipe,
      // we export Common Module and FormsModule bewcause we dont want to import them in every module
  ]
})
export class SharedModule { }
