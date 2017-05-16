import { Component } from '@angular/core';
import {
  NavController,
  NavParams,
} from 'ionic-angular';
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  public user = this.navParams.data
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
