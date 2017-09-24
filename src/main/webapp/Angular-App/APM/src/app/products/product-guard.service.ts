import { Injectable } from '@angular/core';

import {CanActivate, ActivatedRouteSnapshot, Router} from "@angular/router";

@Injectable()
export class ProductGuardService implements CanActivate{

    constructor(private _routeer: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot): boolean{
      let id = +route.url[1].path;
      if (isNaN(id) || id<1)
      {
          alert("Invalid product Number");
          this._routeer.navigate(["/products"]);
          return false;
      }
      return true;
  }

}
