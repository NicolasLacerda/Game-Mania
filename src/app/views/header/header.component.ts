import { Component, OnInit } from '@angular/core';
import scriptTopo from 'src/assets/ts/scriptTopo';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    scriptTopo();
  }
}
