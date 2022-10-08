import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems = [
    // {
    //   id: 1,
    //   imageUrl:
    //     'https://www.ludeka.com.br/image/cache/data/componentes/D-06/d6-26mm-branco-800x800.jpg',
    //   productName: 1,
    //   qty: 4,
    //   price: 100,
    // },
    // {
    //   id: 2,
    //   imageUrl:
    //     'https://www.ludeka.com.br/image/cache/data/componentes/D-06/d6-26mm-branco-800x800.jpg',
    //   productName: 2,
    //   qty: 4,
    //   price: 50,
    // },
    // {
    //   id: 3,
    //   imageUrl:
    //     'https://www.ludeka.com.br/image/cache/data/componentes/D-06/d6-26mm-branco-800x800.jpg',
    //   productName: 3,
    //   qty: 4,
    //   price: 150,
    // },
    // {
    //   id: 4,
    //   imageUrl:
    //     'https://www.ludeka.com.br/image/cache/data/componentes/D-06/d6-26mm-branco-800x800.jpg',
    //   productName: 4,
    //   qty: 4,
    //   price: 100,
    // },
  ];

  constructor(private msg: MessengerService) {}

  ngOnInit() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.cartItems.push({
        productName: product.name,
      });
    });
  }
}
