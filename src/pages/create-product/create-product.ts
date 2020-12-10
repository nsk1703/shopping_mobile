import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Product, Availability } from '../../models/interface-products';

/**
 * Generated class for the CreateProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-product',
  templateUrl: 'create-product.html',
})
export class CreateProductPage {
myProduct : Product;
categories = [];
cities = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
    this.myProduct = {} as Product;
    this.myProduct.availability = {} as Availability;
    this.myProduct.picture = [];
    this.cities = [
      {
        name : "Paris"
      },
      {
        name : "Douala"
      },
      {
        name : "Yaounde"
      },
      {
        name : "Londres"
      }
    ]
    this.categories = [
      {
        title : "Vetements"
      },
      {
        title : "Chaussures"
      },
      {
        title : "Electronique"
      },
      {
        title: "Mode & Accessoires"
      }
    ]
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateProductPage');
  }

  create(myProduct : Product) {
    myProduct.id ="7";
    myProduct.createdAt = new Date();
    myProduct.averageStar = 1;
    myProduct.availability.available = true;
    console.log('myProduct = ', myProduct);
    
  }
}
