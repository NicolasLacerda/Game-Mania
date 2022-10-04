import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { RequestLogin } from 'src/app/models/requestLogin';
import { LoginService } from 'src/app/services/login.service';
import scriptLoginError from 'src/assets/ts/scriptLoginError';
import scriptLoginSucess from 'src/assets/ts/scriptLoginSucess';

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
        scriptLoginSucess();
        this.router.navigate(['']);
        console.log(data);
      },
      (error) => {
        scriptLoginError();
        console.error(error);
      }
    );
  }
}
