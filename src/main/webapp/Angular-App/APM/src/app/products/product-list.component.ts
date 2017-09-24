
import {Component, OnInit} from '@angular/core'
import {IProduct} from "./product";
//import {ProductService} from "./product.service"
import {ProductService} from "./product.service";


@Component({
    
    //selector:'pm-products',
    templateUrl:'./product-list.component.html',
    //providers:[ProductService]
    //styleUrls:
})
export class ProductListComponent implements OnInit {
    pageTitle: string="Product List";
    imageWidth: number=50;
    imageMarging: number=0;
    showImage: boolean=false;
    errorMessage: string;
    //private _productService:ProductService;
    
    
    
    private _listFilter: string; //property
    //we did it like this to call fileter in the setter when the value changed
    //its easier than watcher
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value: string)
    {
        this._listFilter = value;
        this.filteredProducts = value ? this.performFilter(value) : this.products;
    }
    products: IProduct[];
    filteredProducts: IProduct[] ;
    constructor(private _productService: ProductService){
        
        
    }
    toggleImage():void{
        console.log("Toggel");
        this.showImage = !this.showImage;
    }
    
    performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLowerCase();
        return this.products.filter(p => p.productName.toLowerCase().indexOf(filterBy)!==-1);
    }
    
    ngOnInit():void{
        this._productService.getProducts().subscribe(
            product =>
            {
                 this.products = product;
                 this.filteredProducts = this.products;
            },
            err=>this.errorMessage=err);
        this.filteredProducts = this.products;
        
    }
    
    onRatingClicked( message:string):void
    {
        this.pageTitle = message;
    }
}

