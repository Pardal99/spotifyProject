import { AppState } from './app.global';
import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform, MenuController } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';

import { FirstRunPage } from '../pages';
import { Settings } from '../providers/index';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = FirstRunPage;
  activePage = new Subject();
  listSongsMenuTitle: string;

  pages: Array<{ title: string, component: any, active: boolean, icon: string }>;
  rightMenuItems: Array<{ icon: string, active: boolean }>;
  state: any;
  placeholder = 'assets/img/avatar/pablo_profile.png';
  chosenPicture: any;

  constructor(
    public translate: TranslateService,
    public platform: Platform,
    public settings: Settings,
    public config: Config,
    public statusBar: StatusBar,
    public global: AppState,
    public splashScreen: SplashScreen,
    public menuCtrl: MenuController
  ) {
    this.initializeApp();
    this.initTranslate();

    this.rightMenuItems = [
      { icon: 'information-circle', active: false },
      { icon: 'list-box', active: false },
      { icon: 'settings', active: false },
      { icon: 'log-out', active: false }
    ];

    this.pages = [
      { title: 'LIST_SONGS_TITLE', component: 'ListPage', active: false, icon: 'list-box' },
      { title: 'DESCRIPTION_SONGS_TITLE', component: 'ContentPage', active: false, icon: 'information-circle' },
      { title: 'SETTINGS_TITLE', component: 'SettingsPage', active: false, icon: 'settings' },
      { title: 'LOGOUT_TITTLE', component: 'LoginPage', active: false, icon: 'log-out' }
    ];

    this.activePage.subscribe((selectedPage: any) => {
      this.pages.map(page => {
        page.active = page.title === selectedPage.title;
      });
    });
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('es');
    this.translate.use('es');;

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.global.set('theme', '');
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.menuCtrl.enable(false, 'right');
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage.next(page);
  }

  rightMenuClick(item) {
    this.rightMenuItems.map(menuItem => menuItem.active = false);
    item.active = true;
  }
}
