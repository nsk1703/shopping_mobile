import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// import { DetailsPage } from '../pages/details/details';
import { DetailsPageModule } from '../pages/details/details.module';
import { MenuPage } from '../pages/menu/menu';
import { IonicStorageModule } from '@ionic/storage';
import { CartPage } from '../pages/cart/cart';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { MethodProvider } from '../providers/method/method';
import { HttpClientModule } from '@angular/common/http';
import { CreateProductPage } from '../pages/create-product/create-product';
 
@NgModule({
  declarations: [
    MyApp, 
    HomePage,
    MenuPage,
    CartPage,
    CreateProductPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    DetailsPageModule,
    IonicStorageModule.forRoot(),
    IonicImageViewerModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    CartPage,
    CreateProductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MethodProvider
  ]
})
export class AppModule {}
