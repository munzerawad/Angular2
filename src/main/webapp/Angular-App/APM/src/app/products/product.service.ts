
import {Injectable} from "@angular/core";
import {IProduct} from "./product";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

import {Observable} from "rxjs/Observable"
//import   "rxjs/Rx" its import all operator to the Observal
import "rxjs/Observable/throw";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
@Injectable()
export class ProductService{
    
    private _produtsURL="../../api/products/products.json"
    
    constructor(private _http: HttpClient){
        
    }
    
    getProducts(): Observable<IProduct[]>{
        return this._http.get<IProduct[]>(this._produtsURL)
            .do(data => console.log("All:" + JSON.stringify(data)))
            .catch(this.handelError);
    }
    
    private handelError(err: HttpErrorResponse)
    {
        console.log("Error Handling in product Service");
        return Observable.throw(err.message);
    }
    
}


