import {
  NavController
} from 'ionic-angular';

import {
  Component
} from '@angular/core';
import {
  People
} from '../../providers/people'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public people = this.service.getPeople()
  public shouldReorder = false;
  constructor(
    public navCtrl: NavController,
    public service: People,
  ) {}
  toggleReorder() {
    this.shouldReorder = !this.shouldReorder
  }

}
