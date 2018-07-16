import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-artist',
  templateUrl: 'artist.html',
})
export class ArtistPage {

  artist = [ {
    name: "Band Of Horses",
    id: "0OdUWJ0sBjDrqHygGUXeCF"
  }, {
    name: "Marea",
    id: "5EBH204cwRkvAWknwTAjCQ"
  }, {
    name: "Chambao",
    id: "2qhLqZ1pkiUl5HNrU2Nz0R"
  } ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {  }

  openArtist(artist: any) {
    this.navCtrl.push('SongListPage', {
      artist: artist
    });
  }

}
