import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController, ToastOptions, ModalController } from 'ionic-angular';
import { Product } from '../../models/interface-products';
import { Storage } from '@ionic/storage';
import { itemCart } from '../../models/interface-itemCarts';
import { CartPage } from '../cart/cart';
import { MethodProvider } from '../../providers/method/method';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html', 
})
export class DetailsPage {
  productDetails : Product;

  // "navParams" permet l'acces a tout ce que l'on passe en parametre a la page
  // "Events" evenement pour acceder a la note de notre fichier typeScript,
  //Pour cela on va souscrire a l'evenement 'start-rating:changed' dans le constructeur du parent
  //Donc ce qui est note sera recupere par le star-rating-change'

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public event : Events, public storage : Storage,
              public toast : ToastController, public modal : ModalController,
              public method : MethodProvider) {
                
    this.productDetails = this.navParams.get('data');
    this.event.subscribe('star-rating:changed', (note) =>
      (console.log('Voici la note choisit', note)
      ));

  }  

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  goBack() : void{
    this.navCtrl.pop();
  }

  addToCart(productDetails : Product) : void {
    let added : boolean = false;
    //Si le panier est vide
    this.storage.get("Cart").then((data : itemCart[])=> {
      if(data === null || data.length === 0){
        data = [];
        data.push({ //on rajoute dans notre panier les produits 
          item : productDetails,
          qty : 1,
          amount : productDetails.price
        });
      }
      else{
        //Si le panier n'est pas vide
        for(let i = 0; i < data.length; i++){
          const element : itemCart = data[i];
          //On check si l'id du produit que le client veut ajouter dans son panier est egale a 'id d'un element dans la constante
          if(productDetails.id === element.item.id){
            //Le panier n'est pas vide et contient l'article
            element.qty +=1;
            element.amount += productDetails.price;
            added = true;
          }
          if(!added){ // si added est faux
            //Le panier n'est pas vide et ne contient pas l'article
            data.push({
              item : productDetails,
              qty : 1,
              amount : productDetails.price
            });
          }
        }
      } 
      this.storage.set("Cart", data)
      .then(data => {
        let options : ToastOptions = {
          message : "Votre Panier est mis a jour!!",
          duration: 3000,
          showCloseButton: true,
          closeButtonText: "Fermer",
        };
        this.toast.create(options).present();
      })
      .catch(err =>{
        console.log(("Erreur" + err));
      })
    })
  }

  //Recupere un element qui se retrouve dans le panier 
  openCart() : void {
    this.modal.create(CartPage).present();
  }

  showImage(picture : any, event) : void {
    // event.stopPropagation();
    // this.imageViewer.create(picture).present();
    return this.method.showImage(picture, event);
  }
}
 