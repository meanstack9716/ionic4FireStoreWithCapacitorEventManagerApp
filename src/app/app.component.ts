import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

import { Plugins } from '@capacitor/core';
const { SplashScreen, StatusBar } = Plugins;
import * as firebase from 'firebase/app';
import { firebaseConfig } from './config/credentials';
import 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform
  ) {
    this.initializeApp();
    firebase.initializeApp(firebaseConfig);
    firebase.firestore().settings({timestampsInSnapshots: true});
  }

  initializeApp() {
    SplashScreen.hide().catch(error => {
      console.error(error);
    });
    StatusBar.hide().catch(error => {
      console.error(error);
    });
  }
}
