import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }

  signIn(){
    this.navCtrl.setRoot('LoginPage');
  }
  
  signUp(){
    this.navCtrl.setRoot('LoginPage');
  }

}
