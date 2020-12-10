import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateProductPage } from './create-product';
import { StarRatingModule } from 'ionic3-star-rating';


@NgModule({
  declarations: [
    CreateProductPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateProductPage),
    StarRatingModule
  ],
  exports: [
    CreateProductPage
  ]
})
export class CreateProductPageModule {}