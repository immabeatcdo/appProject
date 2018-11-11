import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { SevenSeasPage } from '../pages/seven-seas/seven-seas';
import { HugoSkyePage } from '../pages/hugo-skye/hugo-skye';
import { HighRidgePage } from '../pages/high-ridge/high-ridge';
import { DahilayanAdventurePage } from '../pages/dahilayan-adventure/dahilayan-adventure';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    SevenSeasPage,
    HugoSkyePage,
    HighRidgePage,
    DahilayanAdventurePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    SevenSeasPage,
    HugoSkyePage,
    HighRidgePage,
    DahilayanAdventurePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
