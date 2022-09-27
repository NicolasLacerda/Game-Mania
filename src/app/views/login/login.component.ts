import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    $('#icon1').css('display', 'none');
    $('.textMenu').css('display', 'none');
    $('.caixaDePesquisaPosition').css('display', 'none');
  }

  userModel = new User();
  receberDados() {
    // console.log(this.userModel);
    this.loginService.login(this.userModel).subscribe((response) => {
      console.log(response);
    });
  }
}
