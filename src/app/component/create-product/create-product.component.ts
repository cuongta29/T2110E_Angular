import {Component} from "@angular/core";
import {ProductService} from "../product.service";


@Component({
  selector: "create-product",
  templateUrl:"./create-product.component.html"
})
export class CreateProductComponent {
  private products: any;

  constructor(private productService: ProductService) { }
  getProdcts(){
    return this.productService.get().then(products => {
      this.products = products;
    });
  }
  ngOnInit() {
    this.getProdcts();
  }
}
