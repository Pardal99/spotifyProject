import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
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
    public listService: ListService) {  }

  ionViewWillEnter() {
    this.searchMusic();
  }

  searchMusic(){
    this.jsonSongs = this.listService.searchMusic(this.searchStr)
        .subscribe(res => {
          this.jsonSongs = res;
        });
  }

}
