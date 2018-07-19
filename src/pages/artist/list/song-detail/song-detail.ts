import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

import { ApiService, ApiUrls } from '../../../../providers/index';

@IonicPage()
@Component({
  selector: 'page-song-detail',
  templateUrl: 'song-detail.html'
})
export class SongDetailPage {
  song: any;
  songUrl: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private api: ApiService,
    private urls: ApiUrls,
    private sanitized : DomSanitizer
  ) {
    this.song = navParams.get('song');
  }

  getSongUrl(url: string) {
    var urlAux = this.urls.spotifyTrackPlay + url;
    this.songUrl = this.sanitized.bypassSecurityTrustResourceUrl(urlAux);

    return this.songUrl;
  }

}
