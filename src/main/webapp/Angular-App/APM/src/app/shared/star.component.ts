

import {Component, OnChanges, Input, EventEmitter, Output} from "@angular/core";

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css'],
})
export class StarComponent implements OnChanges{
    @Input() rating: number;//to get it as property of this component when use it in html
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter <string>();
    ngOnChanges():void{
        this.starWidth = this.rating*86/5;
    }
    onClick():void
    {
        this.ratingClicked.emit(`Rating Clicked ${this.rating}`);
    }
}


