import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import scriptVitrine from 'src/assets/ts/scriptVitrine';
import * as $ from 'jquery';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: Product;

  constructor(private msg: MessengerService) {}

  ngOnInit() {}

  handleAddToCart() {
    this.msg.sendMsg(this.productItem);
  }

  ligarCoracao() {
    let coracaoVazio = document.querySelectorAll('.coracao');
    $(coracaoVazio).click(function () {
      var clicks = $(this).data('clicks');
      if (clicks) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }

      $(this).data('clicks', !clicks);
    });
  }
}
