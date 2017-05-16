import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class People {
  constructor(public http: Http) {
    console.log('Hello People Provider');
  }

  public people = [
    {
      gender: "male",
      name: { title: "mr", first: "julian", last: "kohl" },
      location: {
        street: "6797 mühlenweg",
        city: "kleve",
        state: "bremen",
        postcode: 87356
      },
      email: "julian.kohl@example.com",
      login: {
        username: "browndog589",
        password: "finish",
        salt: "BclbhNDG",
        md5: "f430331b5a0172280153c45e94d36782",
        sha1: "d4e3d6f2fdb275e5df4c1c7abe821b1b03ee3fee",
        sha256: "22d4d01aee50055c2e3acf5c5786c05b645f56680e84dcd5a20fc50c89d5f547"
      },
      dob: "1946-04-17 13:40:10",
      registered: "2008-08-14 21:32:15",
      phone: "0601-9171644",
      cell: "0174-3893722",
      id: { name: "", value: null },
      picture: {
        large: "https://randomuser.me/api/portraits/men/71.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/71.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/71.jpg"
      },
      nat: "DE"
    },
    {
      gender: "female",
      name: { title: "mrs", first: "ilaine", last: "fogaça" },
      location: {
        street: "3406 rua josé bonifácio ",
        city: "são mateus",
        state: "tocantins",
        postcode: 84890
      },
      email: "ilaine.fogaça@example.com",
      login: {
        username: "organicrabbit558",
        password: "cromwell",
        salt: "NUykPRT7",
        md5: "132e21636041c114be257cf04f92b449",
        sha1: "2a5c32c27aeee1b69f5d5b6a790b9f0e9b06c2bc",
        sha256: "71600c8f347e191d6197679add9398bc51fcf34cd625b230f8be8c70b2f49207"
      },
      dob: "1960-06-30 10:32:10",
      registered: "2014-08-20 04:07:13",
      phone: "(20) 7947-2468",
      cell: "(19) 8711-9665",
      id: { name: "", value: null },
      picture: {
        large: "https://randomuser.me/api/portraits/women/26.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/26.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/26.jpg"
      },
      nat: "BR"
    },
    {
      gender: "female",
      name: { title: "ms", first: "florence", last: "clarke" },
      location: {
        street: "2714 maunganui road",
        city: "whanganui",
        state: "bay of plenty",
        postcode: 32413
      },
      email: "florence.clarke@example.com",
      login: {
        username: "tinyostrich898",
        password: "stokes",
        salt: "gDj8C3ba",
        md5: "70de1cde511885b92c68cda2fd6b25f7",
        sha1: "16216ddb4ff0b8baa58bf941e600f161c50a151b",
        sha256: "1a3a1c023739f29c54e6ccba58604cf85c1ebfe5d15962192628cf5482f35898"
      },
      dob: "1990-02-19 09:50:41",
      registered: "2004-04-07 05:24:08",
      phone: "(227)-014-4248",
      cell: "(332)-165-5972",
      id: { name: "", value: null },
      picture: {
        large: "https://randomuser.me/api/portraits/women/47.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/47.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/47.jpg"
      },
      nat: "NZ"
    }
  ]
  getPeople(){
    return this.people;
  }

}
