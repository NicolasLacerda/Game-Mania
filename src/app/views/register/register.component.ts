import { Component, OnInit } from '@angular/core';
import { RequestRegister } from 'src/app/models/requestRegister';
import { RegisterService } from 'src/app/services/register.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import scriptError from 'src/assets/ts/error';
import emailError from 'src/assets/ts/emailError';
import passwordError from 'src/assets/ts/passwordError';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public requestRegister: RequestRegister;
  requestLogin: any;

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    $('#icon1').css('display', 'none');
    $('.textMenu').css('display', 'none');
    $('.caixaDePesquisaPosition').css('display', 'none');
    this.requestRegister = new RequestRegister();
  }

  public doRegister(): void {
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
      if (this.requestRegister.email.toLocaleLowerCase().includes(word)) {
        alert(`Entrada Negada. ' ${word} ' Não é um caractere válido`);
        scriptError();
        return;
      }
    });

    this.registerService.doLogin(this.requestRegister).subscribe(
      (data) => {
        $('.registered').addClass('active');
        setTimeout(function () {
          $('.registered').animate({ opacity: 'hide' }, 300);
        }, 2000);
        this.router.navigate(['login']);
        console.log(data);
      },
      (error) => {
        if (error.error == 'Email format is invalid') {
          emailError();
        } else if ($('.senha1') == $('.senha2')) {
          return;
          passwordError();
        }
        console.error(error);
      }
    );
  }
}
