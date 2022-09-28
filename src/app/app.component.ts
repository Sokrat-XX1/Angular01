import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IProduct } from './models/product';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular app';

  // products: IProduct[] = []
  loading = false
  products$: Observable<IProduct[]>
  term = ''

  constructor(private productService: ProductsService){

  }

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productService.getAll().pipe(
      tap(() => this.loading = false)
    )
    // this.productService.getAll().subscribe(products=>{
    //   this.products = products
    //   this.loading = false
    // })
  }
}
