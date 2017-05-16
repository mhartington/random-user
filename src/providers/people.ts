import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class People {
  constructor(public http: Http) {
    console.log('Hello People Provider');
  }

  getPeople(){
    return this.http.get('https://randomuser.me/api/?results=3')
    .map(res => res.json())
  }

}
