import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Environment } from './../../environments/environment';
import { Subject } from 'rxjs/Subject';
import { ApiService, ApiUrls, StorageService }
  from './../../providers/index';

@Injectable()
export class LoginService {
  constructor(
    private api: ApiService,
    private urls: ApiUrls,
    private storage: StorageService,
    private translate: TranslateService
  ) { }

  loginSubmit() {

    const params = {
      grant_type: 'client_credentials'
    };
    const authorizationHeader = 'Basic ' +
                    btoa(Environment.CLIENT_ID + ':' + Environment.CLIENT_SECRET);
    const headers = new HttpHeaders()
                    .set('Authorization', authorizationHeader)
                    .set('Content-Type', 'application/x-www-form-urlencoded');

    return this.api.post(this.urls.logIn, null, params, headers).share();
  }

  saveToken(data) {
    this.storage.set('access_token', data.access_token);
    this.storage.set('token_type', data.token_type);
  }

}
