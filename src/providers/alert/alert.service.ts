import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AlertService {
  public alertPresented: boolean;
  constructor(private alertCtrl: AlertController) {
    this.alertPresented = false;
  }

  presentAlert(titleMsg: any, textMsg: any, buttonsMsg: any) {
    const vm = this;

    if (!vm.alertPresented) {
      vm.alertPresented = true;
      const alert = vm.alertCtrl.create({
        message: textMsg,
        cssClass: 'custom-alert',
        buttons: vm.getButtons(buttonsMsg, vm),
      });

      alert.present();
      return alert;
    }
  }

  getButtons(buttonsMsg, vm) {
    const buttons = [];

    for (const item of buttonsMsg) {
      buttons.push({
        text: item.text,
        handler: () => {
          vm.alertPresented = false;
          if (item.handler) {
            item.handler();
          }
        }
      });
    }

    return buttons;
  }
}
