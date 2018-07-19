import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lang-selector',
  templateUrl: 'lang-selector.html'
})
export class LangSelectorComponent {
  public lang: any;
  // public ES = 'assets/img/icon/icon_spain.png';

  constructor(
    public translate: TranslateService
  ) { }

  switchLanguage() {
    this.translate.use(this.lang);
  }

}
