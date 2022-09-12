import { Component, OnInit } from '@angular/core';
import scriptTopo from './scriptTopo';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    scriptTopo();
  }
}
