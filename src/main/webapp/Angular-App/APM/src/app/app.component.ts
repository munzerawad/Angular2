import { Component } from '@angular/core';
//import {ProductService} from "./products/product.service"
import {} from "@angular/router"
@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  // template:` <div></div>`,
  styleUrls: ['./app.component.css'],
  providers:[
        //ProductService
    ]
})
export class AppComponent {
  title = 'Angular: Getting Started';
  name: string="hello";
}
