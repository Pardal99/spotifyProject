import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { ApiService } from '../api/api.service';
import { ApiUrls } from '../api/api.urls';

@Injectable()
export class Items {

  constructor(public api: ApiService) { }

  query(params?: any) {
    return this.api.get('/items', params);
  }

  add(item: Item) {
  }

  delete(item: Item) {
  }

}
