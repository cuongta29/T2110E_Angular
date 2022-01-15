import {Component} from "@angular/core";
import {ProductService} from "../product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {FormsModule} from '@angular/forms'

@Component({
  selector: "list-products2",
  templateUrl:"./listproduct2.component.html"
})
export class Listproduct2Component {
  products: any;
  productName: any;
  productPrice: any;
  constructor(private productService: ProductService) { }
  getProdcts(){
    return this.productService.get().then(products => {
      this.products = products;
    });
  }
  ngOnInit() {
    this.getProdcts();
  }

  deleteProduct(productName:any) {
    this.productService.delete(productName).then(() => {
      return this.getProdcts();
    });
  }

  addProduct() {

  }
}
