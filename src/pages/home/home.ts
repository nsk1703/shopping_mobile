import { Component } from '@angular/core';
import { NavController, AlertController, AlertOptions, ActionSheetController, ActionSheetOptions, ModalController, ModalOptions } from 'ionic-angular';
//Pages
import { DetailsPage } from '../details/details';
//Classes d'objets
import { Product } from '../../models/interface-products';
// Methodes
import { ImageViewerController } from 'ionic-img-viewer';
import { MethodProvider } from '../../providers/method/method';
import { CreateProductPage } from '../create-product/create-product';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Articles : Product[];
  constructor(
    public navCtrl: NavController, 
    public alertCtrl : AlertController, 
    public actionCtrl : ActionSheetController,
    public modalCtrl : ModalController,
    public imageViewer : ImageViewerController,
    public method : MethodProvider) {  
    //On simule le fait que les articles proviennent d'une base de donnees
    this.Articles = [
      {
        title : 'Jacket',
        description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid asperiores iure, id sit reiciendis architecto sapiente in animi dolorem officia, commodi sed incidunt placeat vel esse ipsam molestiae eos natus',
        price : 45,
        category : 'Vetements',
        createdAt : new Date(),
        state : 'Neuf',
        city : 'Londres',
        id : '1',
        averageStar : 4,
        availability : {
          available : true,
          type : 'Livraison',
          feed : 10
        },
        picture : [
          'assets/imgs/Product1/presto1.jpg',
          'assets/imgs/Product1/presto2.jpg',
          'assets/imgs/Product1/presto3.jpg',
          'assets/imgs/Product1/presto4.jpg'
        ] 
      },
      {
        title : 'Maquillage',
        description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid asperiores iure, id sit reiciendis architecto sapiente in animi dolorem officia, commodi sed incidunt placeat vel esse ipsam molestiae eos natus',
        price : 25,
        category : 'Mode & Accessoires',
        createdAt : new Date(),
        state : 'Neuf',
        city : 'Madrid',
        id : '2',
        averageStar : 3,
        availability : {
          available : true,
          type : 'Disponible en Magasin',
        },
        picture : [
          'assets/imgs/Product2/makeup1.jpg',
          'assets/imgs/Product2/makeup2.jpg',
          'assets/imgs/Product2/makeup3.jpg',
          'assets/imgs/Product2/makeup4.jpg'
        ] 
      },
      {
        title : 'Telephone Iphone',
        description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid asperiores iure, id sit reiciendis architecto sapiente in animi dolorem officia, commodi sed incidunt placeat vel esse ipsam molestiae eos natus',
        price : 145,
        category : 'Electronique',
        createdAt : new Date(),
        state : 'Neuf',
        city : 'Londres',
        id : '3',
        averageStar : 5,
        availability : {
          available : true,
          type : 'Disponible en Magasin',
        },
        picture : [
          'assets/imgs/Product3/phone1.jpg',
          'assets/imgs/Product3/phone2.jpg',
          'assets/imgs/Product3/phone3.jpg',
          'assets/imgs/Product3/phone4.jpg'
        ] 
      },
      {
        title : 'PS4',
        description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid asperiores iure, id sit reiciendis architecto sapiente in animi dolorem officia, commodi sed incidunt placeat vel esse ipsam molestiae eos natus',
        price : 85,
        category : 'Vetements',
        createdAt : new Date(),
        state : 'Déjà utilisé',
        city : 'Londres',
        id : '4',
        averageStar : 4,
        availability : {
          available : true,
          type : 'Livraison', 
          feed : 14
        },
        picture : [
          'assets/imgs/Product4/ps1.jpg',
          'assets/imgs/Product4/ps2.jpg',
          'assets/imgs/Product4/ps3.jpg',
          'assets/imgs/Product4/ps4.jpg'
        ] 
      },
      {
        title : 'Ketch Nike',
        description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid asperiores iure, id sit reiciendis architecto sapiente in animi dolorem officia, commodi sed incidunt placeat vel esse ipsam molestiae eos natus',
        price : 70,
        category : 'Chaussures',
        createdAt : new Date(),
        state : 'Neuf',
        city : 'Londres',
        id : '5',
        averageStar : 2,
        availability : {
          available : true,
          type : 'Livraison',
          feed : 7
        },
        picture : [
          'assets/imgs/Product5/nike1.jpg',
          'assets/imgs/Product5/nike2.jpg',
          'assets/imgs/Product5/nike3.jpg',
          'assets/imgs/Product5/nike4.jpg'
        ] 
      }
    ]
  }

  showDetails(article : Product) : void{
    this.navCtrl.push(DetailsPage, {data : article});
  }
     
  showImage(picture : any, event) : void {
    // event.stopPropagation();
    // this.imageViewer.create(picture).present();
    return this.method.showImage(picture, event);
  }

  showCreatePage(){
    this.navCtrl.push(CreateProductPage); 
  }
}
