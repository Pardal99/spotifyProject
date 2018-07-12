import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { ApiService, ApiUrls, StorageService } from '../../providers/index';

@Injectable()
export class ListService{
    private searchUrl: string;
    private result: any;

    constructor(
      private api: ApiService,
      private urls: ApiUrls,
      private storage: StorageService
    ){ }

    searchMusic(str:string){
      this.searchUrl = this.urls.spotifyTracksSearch + '?ids=' + str + '&market=ES';
      const authorizationHeader = 'Bearer ' + this.storage.get('access_token');
      const headers = new Headers({ 'Authorization': authorizationHeader });
      const options = new RequestOptions({ headers: headers });

      return this.api.get(this.searchUrl, options).share();
    }

}
