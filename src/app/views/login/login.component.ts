import { Component, OnInit, Renderer2 } from '@angular/core';
import { RequestLogin } from 'src/app/models/requestLogin';
import { LoginService } from 'src/app/services/login.service';
import scriptHeaderLogged from 'src/assets/ts/scriptHeaderLogged';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import scriptError from 'src/assets/ts/error';
import passwordError from 'src/assets/ts/passwordError';
import emailError from 'src/assets/ts/emailError';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public requestLogin: RequestLogin;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private _renderer: Renderer2,
    private _http: HttpClient
  ) {}

  ngOnInit(): void {
    $('#icon1').css('display', 'none');
    $('.textMenu').css('display', 'none');
    $('.caixaDePesquisaPosition').css('display', 'none');
    this.requestLogin = new RequestLogin();
    let script = this._renderer.createElement('script');
    script.defer = true;
    script.async = true;
    script.src = 'https://www.google.com/recaptcha/api.js';
    this._renderer.appendChild(document.body, script);
  }

  public doLogin(): void {
    const blacklist: string[] = [
      'select ',
      'from ',
      'drop ',
      'or ',
      'having ',
      'group ',
      'by ',
      'insert ',
      'exec ',
      '"',
      "'",
      '-',
      '#',
      '*',
      ';',
    ];

    blacklist.forEach((word) => {
      if (this.requestLogin.email.toLocaleLowerCase().includes(word)) {
        alert(`Entrada Negada. ' ${word} ' Não é um caractere válido`);
        scriptError();
        return;
      }
    });

    this.loginService.doLogin(this.requestLogin).subscribe(
      (data) => {
        $('.logged').addClass('active');
        setTimeout(function () {
          $('.logged').animate({ opacity: 'hide' }, 300);
        }, 2000);
        scriptHeaderLogged();
        this.router.navigate(['']);
        console.log(data);
      },
      (error) => {
        if (error.error == 'Incorrect password') {
          passwordError();
        } else if (error.error == 'Cannot find user') {
          emailError();
        } else {
          scriptError();
        }
        console.error(error);
      }
    );
  }

  resolved(token) {
    console.log(token);
    $('.loginButton').css('display', 'flex');
    $('.subtitle').css('display', 'none');
  }
}
