import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic'; 
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  todo = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    if(this.todo.username == "admin" && this.todo.password == "admin") {
      this.navCtrl.push(HelloIonicPage);
    } else {
      let alertWindow = this.alert.create({
        title: "Invalid Credentials",
        subTitle: "Invalid username/password.",
        buttons: ['Dismiss']
      });
      alertWindow.present();
    }
  }

}
