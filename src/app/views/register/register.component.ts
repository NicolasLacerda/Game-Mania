import { Component, OnInit } from '@angular/core';
import { RequestRegister } from 'src/app/models/requestRegister';
import { RegisterService } from 'src/app/services/register.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public requestRegister: RequestRegister;

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
          $('.inputContainerEmail').css('color', 'red');
          $('.emailRegister').css('border-bottom', '1px solid red');
          $('.emailRegister').attr('placeholder', 'Email Inválido');
          $('.imagePositionEmail').addClass('active');
        }
        console.error(error);
      }
    );
  }
}
