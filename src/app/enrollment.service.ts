import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './Models/user'

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = '';

  constructor(private _http: HttpClient) { }

  enroll(uer: User) {
    return this._http.post<any>(this._url, User);
  }
}
