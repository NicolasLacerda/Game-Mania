import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestRegister } from '../models/requestRegister';
import { ResponseRegister } from '../models/responseRegister';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private httpClient: HttpClient) {}

  public doLogin(
    requestRegister: RequestRegister
  ): Observable<ResponseRegister> {
    return this.httpClient.post<ResponseRegister>(
      'http://localhost:3000/register',
      requestRegister
    );
  }
}
