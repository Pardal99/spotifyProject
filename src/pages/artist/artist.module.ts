import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ArtistService } from './artist.service';
import { ArtistPage } from './artist';

@NgModule({
  declarations: [
    ArtistPage,
  ],
  imports: [
    IonicPageModule.forChild(ArtistPage),
    TranslateModule.forChild()
  ],
  exports: [
    ArtistPage
  ],
  providers: [
    ArtistService
  ]
})
export class ArtistPageModule {}
