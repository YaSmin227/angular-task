import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css'],
})
export class ProductsDetailsComponent implements OnInit {
  productDetails;
  id: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productDataService: ProductServiceService
  ) {}

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.params['id'];
    this.productDataService.productData$.subscribe(
      (res) => {
        this.productDetails = res.find((product) => product.id === this.id);
      }
    );
  }
}
