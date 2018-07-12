import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, ModalController, ToastController, NavController, NavParams } from 'ionic-angular';

import { LoginService } from './login.service';
import { MainPage } from '../';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    private loginService: LoginService,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  doLogin() {
    this.loginService.loginSubmit()
      .subscribe(
      (res: any) => {
        this.loginService.saveToken(res);
        this.loginSuccess();
      },
      (res) => this.errorHandler(res)
      );

  }

  private loginSuccess() {
    this.navCtrl.setRoot(MainPage);
  }

  errorHandler(error) {
    if (error) {
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
  }

}
