import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ArtistDetailPage } from './artist-detail';

@NgModule({
  declarations: [
    ArtistDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ArtistDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    ArtistDetailPage
  ]
})
export class ArtistDetailPageModule { }
