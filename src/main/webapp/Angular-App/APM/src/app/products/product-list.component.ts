
import {Component, OnInit} from '@angular/core'
import {IProduct} from "./product";


@Component({
    
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    //styleUrls:
})
export class ProductListComponent implements OnInit {
    pageTitle: string="Product List";
    imageWidth: number=50;
    imageMarging: number=0;
    showImage: boolean=false;
    
    _listFilter: string; //property
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
    products: IProduct[]=[
        {
            "productId":2,
            "productName":"product 1",
            "imageUrl":"https://openclipart.org/download/282742/Shoe-Clipart-2017070724-remix.svg",
            "code":"GHYR-1789",
            "releaseDate":"1990",
            "price":100.5,
            
            "descrition":"Good",
            "starRating":3,
        }
    ];
    filteredProducts: IProduct[] = this.products;
    toggleImage():void{
        console.log("Toggel");
        this.showImage = !this.showImage;
    }
    
    performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLowerCase();
        return this.products.filter(p => p.productName.toLowerCase().indexOf(filterBy)!==-1);
    }
    
    ngOnInit():void{
        console.log('OnInit ProductList');
    }
}

