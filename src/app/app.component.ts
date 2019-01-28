import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { FCM } from '@ionic-native/fcm/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FCM,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.fcm.onNotification().subscribe(data => {
        if (data.wasTapped) {
          // Notification was received on device tray and tapped by the user.
          this.router.navigateByUrl('/client-detail/' + data.clientId);
        } else {
          // Notification was received in foreground. Maybe the user needs to be notified.
          this.router.navigateByUrl('/client-detail/' + data.clientId);
        }
      });
    });
  }
}
