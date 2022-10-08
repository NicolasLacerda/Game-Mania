import { Component, OnInit } from '@angular/core';
import scriptCarousel from 'src/assets/ts/scriptCarousel';
import scriptVitrine from 'src/assets/ts/scriptVitrine';
import * as $ from 'jquery';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './CSS/stylesBars.css',
    './CSS/stylesCarousel.css',
    './CSS/stylesCorpo1.css',
    './CSS/stylesCorpo2.css',
    './CSS/stylesFileiras.css',
    './CSS/stylesVitrine.css',
    './CSS/stylesVitrinePequena.css',
  ],
})
export class HomeComponent implements OnInit {
  productList: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    scriptCarousel();
    scriptVitrine();
    $('#icon1').css('display', 'flex');
    $('.textMenu').css('display', 'flex');
    $('.caixaDePesquisaPosition').css('display', 'flex');
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    });
  }
}
