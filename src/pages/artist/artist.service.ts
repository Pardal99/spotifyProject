import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ApiService, ApiUrls } from '../../providers/index';

@Injectable()
export class ArtistService{
    private searchUrl: string;
    private result: any;

    constructor(
      private api: ApiService,
      private urls: ApiUrls
    ){ }

    searchArtists (str: string, authorizationHeader: string) {
      this.searchUrl = this.urls.spotifyQuerySearch + str + '&type=artist';

      return this.api.get(this.searchUrl, {
        headers: {'Authorization': authorizationHeader}
      }).share();
    }

}
