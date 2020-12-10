import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartPage } from './cart';
import { StarRatingModule } from 'ionic3-star-rating';


@NgModule({
  declarations: [
    CartPage,
  ],
  imports: [
    IonicPageModule.forChild(CartPage),
    StarRatingModule
  ],
  exports: [
    CartPage
  ]
})
export class CartPageModule {}