import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestLogin } from 'src/app/models/requestLogin';
import { LoginService } from 'src/app/services/login.service';
import * as $ from 'jquery';

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
        $('.logged').addClass('active');
        setTimeout(function () {
          $('.logged').animate({ opacity: 'hide' }, 300);
        }, 2000);
        this.router.navigate(['']);
        console.log(data);
      },
      (error) => {
        if (error.error == 'Incorrect password') {
          $('.inputContainerPassword').css('color', 'red');
          $('#senha').css('border-bottom', '1px solid red');
          $('#senha').attr('placeholder', 'Senha Inválida');
          $('.imagePositionPassword').addClass('active');
        } else if (error.error == 'Cannot find user') {
          $('.inputContainerEmail').css('color', 'red');
          $('#email').css('border-bottom', '1px solid red');
          $('#email').attr('placeholder', 'Email Inválido');
          $('.imagePositionEmail').addClass('active');
        } else {
          $('.inputContainerPassword').css('color', 'red');
          $('#senha').css('border-bottom', '1px solid red');
          $('#senha').attr('placeholder', 'Senha Inválida');
          $('.imagePositionPassword').addClass('active');
          $('.inputContainerEmail').css('color', 'red');
          $('#email').css('border-bottom', '1px solid red');
          $('#email').attr('placeholder', 'Email Inválido');
          $('.imagePositionEmail').addClass('active');
        }
        console.error(error);
      }
    );
  }
}
