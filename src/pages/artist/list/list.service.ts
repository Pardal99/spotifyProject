import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ApiService, ApiUrls } from '../../../providers/index';

@Injectable()
export class ListService{
    private searchUrl: string;
    private result: any;

    constructor(
      private api: ApiService,
      private urls: ApiUrls
    ){ }

    searchMusic (str: string, authorizationHeader: string, country: string) {
      this.searchUrl = this.urls.spotifyArtistsSearch + str + '/top-tracks?country=' + country;

      return this.api.get(this.searchUrl, {
        headers: {'Authorization': authorizationHeader}
      }).share();
    }

}
