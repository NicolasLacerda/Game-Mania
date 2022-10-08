import { Component, OnInit } from '@angular/core';
import scriptCarousel from 'src/assets/ts/scriptCarousel';
import scriptVitrine from 'src/assets/ts/scriptVitrine';
import * as $ from 'jquery';

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
  constructor() {}

  ngOnInit(): void {
    scriptCarousel();
    scriptVitrine();
    $('#icon1').css('display', 'flex');
    $('.textMenu').css('display', 'flex');
    $('.caixaDePesquisaPosition').css('display', 'flex');
  }
}
