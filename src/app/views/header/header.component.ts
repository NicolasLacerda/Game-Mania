import { AuthService } from 'src/app/views/login/auth.service';
import { Component, OnInit } from '@angular/core';
import scriptTopo from './scriptTopo';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  mostrarMenu: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    scriptTopo();

    this.authService.mostrarMenuEmitter.subscribe(
      (mostrar) => (this.mostrarMenu = mostrar)
    );
  }
}
