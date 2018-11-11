import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SevenSeasPage } from '../seven-seas/seven-seas';
import { HugoSkyePage } from '../hugo-skye/hugo-skye';
import { HighRidgePage } from '../high-ridge/high-ridge';
import { DahilayanAdventurePage } from '../dahilayan-adventure/dahilayan-adventure';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(private NavCtrl: NavController) {

  }

  sevenSeas() {
    this.NavCtrl.push(SevenSeasPage);
  }

  hugoSkye() {
    this.NavCtrl.push(HugoSkyePage);
  }

  highRidge() {
    this.NavCtrl.push(HighRidgePage);
  }

  dahilayanAdventure() {
    this.NavCtrl.push(DahilayanAdventurePage);
  }
}
