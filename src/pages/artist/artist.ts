import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { forkJoin } from "rxjs/observable/forkJoin";

import { ArtistService } from './artist.service';
import { StorageService } from '../../providers/index';

@IonicPage()
@Component({
  selector: 'page-artist',
  templateUrl: 'artist.html',
})
export class ArtistPage {
  currentArtists: any = [];
  artist: any = [];

  constructor(
    public artistService: ArtistService,
    private storage: StorageService,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {  }

  ionViewWillEnter() {
    // this.searchArtists();
  }

  searchArtists(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentArtists = [];
      return;
    }
    this.currentArtists = this.query({
      name: val
    });
  }

  query(params?: any) {
    if (!params) {
      return;
    }

    const combined = forkJoin(
      this.storage.getToken()
    );

    combined.subscribe(latestValues => {
      const authorizationHeader = 'Bearer ' + latestValues[0];

      this.artistService.searchArtists(params.name, authorizationHeader).subscribe(data => {
        this.artist = data
      });
    });
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
