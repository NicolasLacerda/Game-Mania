import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { RequestLogin } from 'src/app/models/requestLogin';
import { LoginService } from 'src/app/services/login.service';
import scriptLogin from 'src/assets/ts/scriptLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public requestLogin: RequestLogin;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    $('#icon1').css('display', 'none');
    $('.textMenu').css('display', 'none');
    $('.caixaDePesquisaPosition').css('display', 'none');
    this.requestLogin = new RequestLogin();
  }

  public doLogin(): void {
    this.loginService.doLogin(this.requestLogin).subscribe(
      (data) => {
        this.router.navigate(['']);
        console.log(data);
      },
      (error) => {
        scriptLogin();
        console.error(error);
      }
    );
  }
}
