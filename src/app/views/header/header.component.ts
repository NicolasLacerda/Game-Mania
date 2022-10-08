import { Component, OnInit } from '@angular/core';
import scriptTopo from 'src/assets/ts/scriptTopo';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./CSS/header.component.css', './CSS/header2.component.css'],
})
export class HeaderComponent implements OnInit {
  cartItems = [];

  cartTotal = 0;

  constructor(private msg: MessengerService) {}

  ngOnInit() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product);
    });

    scriptTopo();
  }

  addProductToCart(product: Product) {
    let productExists = false;

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++;
        productExists = true;
        break;
      }
    }

    if (!productExists) {
      this.cartItems.push({
        qty: 1,
        price: product.price,
      });
    }

    this.cartTotal = 0;
    this.cartItems.forEach((item) => {
      this.cartTotal += item.qty * item.price;
    });
  }
}
