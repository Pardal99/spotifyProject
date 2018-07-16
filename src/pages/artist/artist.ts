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
    id: "0OdUWJ0sBjDrqHygGUXeCF",
    img: "https://i.scdn.co/image/8ae35be1043f330173de198c35a49161337e829c",
    followers: 5567
  }, {
    name: "Marea",
    id: "5EBH204cwRkvAWknwTAjCQ",
    img: "https://i.scdn.co/image/d31b970b88e8b7268ff5fc83d46bb1d20dbdfa4c",
    followers: 513215
  }, {
    name: "Chambao",
    id: "2qhLqZ1pkiUl5HNrU2Nz0R",
    img: "https://i.scdn.co/image/e2fcf464e363810c04aa3206f4c6dc771b66af6a",
    followers: 205883
  } ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {  }

  ionViewWillEnter() {
    // this.searchArtists();
  }

  openArtistSongs(artist: any) {
    this.navCtrl.push('SongListPage', {
      artist: artist
    });
  }

  openArtistDetails(artist: any) {
    this.navCtrl.push('ArtistDetailPage', {
      artist: artist
    });
  }

}
