import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { forkJoin } from "rxjs/observable/forkJoin";

import { StorageService } from '../../../providers/index';
import { ListService } from './list.service';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class SongListPage {
  public artist: any;
  searchRes: string;
  public jsonSongs: any;


  constructor(
    public navCtrl: NavController,
    public listService: ListService,
    private storage: StorageService,
    public navParams: NavParams
  ) {
    this.artist = navParams.get('artist');
  }

  ionViewWillEnter() {
    this.searchMusic();
  }

  searchMusic(){
    const combined = forkJoin(
      this.getToken()
    );

    combined.subscribe(latestValues => {
      const authorizationHeader = 'Bearer ' + latestValues[0];

      this.listService.searchMusic(this.artist.id, authorizationHeader, 'ES').subscribe(data => {
        this.jsonSongs = data
      });
    });
  }

  openSong(song: any) {
    this.navCtrl.push('SongDetailPage', {
      song: song
    });
  }

  getToken(){
    return this.storage.get('access_token');
  }

}
