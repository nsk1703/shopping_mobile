import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Category } from '../../models/interface-category';


/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
}) 
export class MenuPage { 
rootPage : any;
categories : Category[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = HomePage;
    this.categories = [
      {
        title : "Vetements",
        description : "description",
        icon : "shirt"
      },
      {
        title : "Electronique",
        description : "description",
        icon : "phone-portrait"
      },
      {
        title : "Mode & Accessoires",
        description : "description",
        icon : "bowtie"
      },
      {
        title : "Chaussures",
        description : "description",
        icon : "archive"
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
