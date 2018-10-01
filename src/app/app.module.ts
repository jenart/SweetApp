import { NgModule, ErrorHandler, Injectable, Injector } from '@angular/core';
import { Pro } from '@ionic/pro';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// set my app Id
Pro.init("31e1854a", {
  appVersion: "0.0.1"
})

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      console.error("unable to get the IonicErrorHandler provider, ensure");
      console.error("IonicErrorHandler has been added to the providers list below!");
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);
    
    // Remove this if you want to disable Ionic's auto exception handling in development mode
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }

}


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IonicErrorHandler,
    {provide: ErrorHandler, useClass: MyErrorHandler}
  ]
})
export class AppModule {}
