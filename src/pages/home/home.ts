import {
  NavController
} from 'ionic-angular';

import {
  Component
} from '@angular/core';
import {
  People
} from '../../providers/people'
import {
  DetailPage
} from '../detail/detail'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public people = [];
  public shouldReorder = false;
  constructor(
    public navCtrl: NavController,
    public service: People,
  ) {
    this.service.getPeople()
      .subscribe(
      data => this.people = data.results
      )
  }
  doInfinite(e) {
    this.service.getPeople()
      .subscribe(
      data => this.people.push(...data.results),
      err => console.log(err),
      () => e.complete()
      )
  }
  doRefresh(e) {
    this.service.getPeople()
      .subscribe(
      data => this.people.unshift(...data.results),
      err => console.log(err),
      () => e.complete()
      )
  }
  toggleReorder() {
    this.shouldReorder = !this.shouldReorder
  }

  pushPage(user) {
    this.navCtrl.push(DetailPage, user)
  }

}
