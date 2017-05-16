import {
  NavController
} from 'ionic-angular';

import {
  Component
} from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public person =  {
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
    }

  constructor(
    public navCtrl: NavController
  ) {}

}
