import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-artist-detail',
  templateUrl: 'artist-detail.html'
})
export class ArtistDetailPage {
  artist: any;

  constructor(
    public navCtrl: NavController,
    navParams: NavParams
  ) {
    this.artist = navParams.get('artist');
  }

}
