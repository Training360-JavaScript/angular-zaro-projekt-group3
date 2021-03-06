import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  list$: Observable<Product[]> = this.productService.getAll()

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

}
