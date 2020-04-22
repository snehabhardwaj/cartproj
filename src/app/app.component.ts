import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productList = [
    { name: 'Samsung', price: 8799 },
    { name: 'Granier cream', price: 999 },
    { name: 'Gloves gloves', price: 454 },
        { name: 'Dettol cream', price: 44 },

            { name: 'hanky gloves', price: 59 }

  ];
  cartProductList = [];

  addProductToCart(product) {
    const productExistInCart = this.cartProductList.find(({ name }) => name === product.name);
    if (!productExistInCart) {
      this.cartProductList.push({ ...product, num: 1 }); 
      return;
    }
    productExistInCart.num += 1;
  }
  removeProduct(product) {
    this.cartProductList = this.cartProductList.filter(({ name }) => name !== product.name)
  }
}
