import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

    getUsers (): Observable<any[]> {

      return this.http.get('http://mocker.egen.io/users')
                      .map(response => response.json())
                      .catch(error => Observable.throw(error.statusText));
    }
    getUserById (userID): Observable<any> {
     // console.log(userID + "in service");
        const user: Observable<any> = this.http.get(`http://mocker.egen.io/users/${userID}`)
                              .map(response => response.json())
                              .catch(error => Observable.throw(error.statusText));
        console.log(user);
         return user;

    }
    addUser (userInfo): Observable<any> {
     return this.http.post('http://mocker.egen.io/users/', userInfo)
          .map(response => response.json())
          .catch(error => Observable.throw(error.statusText));
    }

}
