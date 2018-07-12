import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
      const authorizationHeader = 'Bearer ' + this.getToken();

      return this.api.get(this.searchUrl, {
         headers: {'Authorization': authorizationHeader}
      }).share();
    }

    getToken(){
      return this.storage.get('access_token');
    }

}
