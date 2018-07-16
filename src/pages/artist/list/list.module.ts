import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListService } from './list.service';
import { SongListPage } from './list';

@NgModule({
  declarations: [
    SongListPage,
  ],
  imports: [
    IonicPageModule.forChild(SongListPage),
    TranslateModule.forChild()
  ],
  exports: [
    SongListPage
  ],
  providers: [
    ListService
  ]
})
export class ListPageModule { }
