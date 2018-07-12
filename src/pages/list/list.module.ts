import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListService } from './list.service';
import { ListPage } from './list';

@NgModule({
  declarations: [
    ListPage,
  ],
  imports: [
    IonicPageModule.forChild(ListPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListPage
  ],
  providers: [
    ListService
  ]
})
export class ListPageModule { }
