import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { forkJoin } from "rxjs/observable/forkJoin";

import { StorageService } from '../../providers/index';
import { ListService } from './list.service';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {
  searchStr = '7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B';
  searchRes: string;
  public jsonSongs: any;

  constructor(
    public navCtrl: NavController,
    public listService: ListService,
    private storage: StorageService
  ) {  }

  ionViewWillEnter() {
    this.searchMusic();
  }

  searchMusic(){
    const combined = forkJoin(
      this.getToken()
    );

    combined.subscribe(latestValues => {
      const authorizationHeader = 'Bearer ' + latestValues[0];

      this.listService.searchMusic(this.searchStr, authorizationHeader).subscribe(data => {
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
