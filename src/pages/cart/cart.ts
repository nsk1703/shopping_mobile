import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController, AlertController, AlertOptions, Events } from 'ionic-angular';
import { itemCart } from '../../models/interface-itemCarts';
import { Product } from '../../models/interface-products';
import { Storage } from '@ionic/storage';
import { MethodProvider } from '../../providers/method/method';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  cartItems : itemCart[];
  total : number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl: ViewController, public storage: Storage,
              public toast: ToastController, public alertCtrl: AlertController,
              public method : MethodProvider) {
  }

  // Methode appele a chaque fois que notre page a fini d'etre charge
  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
    this.storage.get("Cart")
      .then((data : itemCart[])=>{ 
        this.cartItems = data;
        this.cartItems.forEach((element : itemCart)=>{
          if(element.item.availability.type === "Disponible en Magasin"){
            element.item.availability.feed = 0;  
          }
          this.total += (element.item.availability.feed + (element.item.price * element.qty));
        });
      })
      .catch(err => {
        console.log("Erreur", err);
      })
  }

  closeModal() : void {
    this.viewCtrl.dismiss();
  }

  removeItem(article : itemCart, index : number) : void{
    let options : AlertOptions = {
      title : "Attention !",
      subTitle : 'Etes-vous certain de vouloir supprimer ${article.item.title}?',
      buttons : [
      {
        text : "Annuler",
        role : "cancel"
      },
      {
        text : "Retirer",
        handler : ()=>{
          let price : number = article.item.price;
          let qty : number = article.qty;
          let feed : number = article.item.availability.feed;
          let myTotal : number = feed+price*qty;

          this.cartItems.splice(index, 1);
          this.storage.set("Cart", this.cartItems)
          .then((data)=>{
            this.total -= myTotal
            this.toast.create({ 
              message : "Article supprimé du panier !",
              duration : 3000
            }).present();
          })
          .catch((error)=>{
            console.log('error', error); 
          })
        }
      }
    ]
    }
    this.alertCtrl.create(options).present()
  }

  showImage(picture : any, event) : void {
    // event.stopPropagation();
    // this.imageViewer.create(picture).present();
    return this.method.showImage(picture, event);
  }
}
