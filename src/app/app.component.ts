import { Component } from '@angular/core';
import { process, State } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

import {
    GridDataResult,
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {


    public gridData= sampleProducts

  
}


// import { Component } from '@angular/core';

// import { GridDataResult, PageChangeEvent } from "@progress/kendo-angular-grid";
// import { SortDescriptor } from "@progress/kendo-data-query";
// import { ProductService } from "./product.service";
// import { Observable } from "rxjs";

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
//   providers: [ProductService]  
// })
// export class AppComponent {
//   title = 'kendo-angular-app';

//   public gridItems!: Observable<GridDataResult>;
//   public pageSize: number = 10;
//   public skip: number = 0;
//   public sortDescriptor: SortDescriptor[] = [];
//   public filterTerm: number | null = null;

//   constructor(private service: ProductService) {
//     this.loadGridItems();
// }

// public pageChange(event: PageChangeEvent): void {
//     this.skip = event.skip;
//     this.loadGridItems();
// }

// private loadGridItems(): void {
//     this.gridItems = this.service.getProducts(this.skip, this.pageSize, this.sortDescriptor, this.filterTerm);
// }

// public handleSortChange(descriptor: SortDescriptor[]): void {
//     this.sortDescriptor = descriptor;
//     this.loadGridItems();
// }

// public handleFilterChange(item: { text: string; value: number | null }): void {
//     this.filterTerm = item.value;
//     this.skip = 0;
//     this.loadGridItems();
// }

// }
