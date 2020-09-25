import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,ModalController } from 'ionic-angular';
import moment from "moment";

@IonicPage()
@Component({
  selector: 'page-track-today',
  templateUrl: 'track-today.html',
})
export class TrackTodayPage {
  isShow:boolean=false;
  isAddmore:boolean=true;
  weekList: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,public modalCtrl: ModalController) {
  }


  dateSelected(date: Date) {
    let newDate = moment(date).format('DD MMM YYYY');
    let day = moment(date, 'YYYY-MM-DD');
    this.viewCtrl.dismiss({ date: newDate, day: day.format('dddd') });
  }

  addMore(){
    this.isShow=true;
    this.isAddmore=false;
  }

  save(){
    this.isShow=false;
    this.isAddmore=true;
  }

  showMore(){}

  saveDeails(){}

  addMoreProducts(){
    let modal = this.modalCtrl.create('PastLooks_2Page',  {showBackdrop: true, enableBackdropDismiss: true});
    modal.present();
  }


  ionViewDidLoad() {
    this.getWeekList();
  }
  
  getWeekList() {
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      let date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
      let d = moment(date, 'YYYY-MM-DD');
      if (i == 0) {
        this.weekList.push({
          name: d.format('dddd'),
          date: date,
          isSelected: true
        })
      } else {
        this.weekList.push({
          name: d.format('dddd'),
          date: date,
          isSelected: false
        })
      }
    }
    console.log(this.weekList);
  }

  getToday(day) {
    let date1 = new Date(Date.now());
    let d1 = moment(date1, 'YYYY-MM-DD');
    if (day.name == d1.format('dddd')) {
      return 'todayDate';
    } else {
      return '';
    }
  }

  selectDay(day: any) {
    this.weekList.filter(item => {
      if (item.name == day.name) {
        item.isSelected = true;
      } else {
        item.isSelected = false;
      }
    })
  }
}
