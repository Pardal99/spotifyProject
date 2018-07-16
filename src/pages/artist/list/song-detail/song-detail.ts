import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-song-detail',
  templateUrl: 'song-detail.html'
})
export class SongDetailPage {
  song: any;

  constructor(
    public navCtrl: NavController,
    navParams: NavParams
  ) {
    this.song = navParams.get('song');
  }

}
