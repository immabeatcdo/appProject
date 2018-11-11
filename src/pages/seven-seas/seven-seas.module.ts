import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SevenSeasPage } from './seven-seas';

@NgModule({
  declarations: [
    SevenSeasPage,
  ],
  imports: [
    IonicPageModule.forChild(SevenSeasPage),
  ],
})
export class SevenSeasPageModule {}
