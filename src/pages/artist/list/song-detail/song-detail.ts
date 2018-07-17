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
  //
  // ionViewWillEnter() {
  //   this.songUrl = 'https://open.spotify.com/album/3ZaBh55fphLCCkgYdsWMyz';
  //   console.log('antes',this.song.album.uri);
  //   this.songUrl = this.getSongUrl(this.songUrl);
  //   console.log('despues',this.songUrl);
  // }

//   updateVideoUrl(id: string) {
//   // Appending an ID to a YouTube URL is safe.
//   // Always make sure to construct SafeValue objects as
//   // close as possible to the input data so
//   // that it's easier to check if the value is safe.
//   this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
//   this.videoUrl =
//       this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
// }

  getSongUrl(url: string) {
    var urlAux = this.urls.spotifyTrackPlay + url;
    this.songUrl = this.sanitized.bypassSecurityTrustResourceUrl(urlAux);
    console.log('antes',this.songUrl);

    return this.songUrl;
  }

}
