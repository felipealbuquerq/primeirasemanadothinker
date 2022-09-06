import { Component } from '@angular/core';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // constructor() {
  //   const firebaseConfig = {
  //     apiKey: environment.apiKey,
  //     authDomain: environment.authDomain,
  //     projectId: environment.projectId,
  //     storageBucket: environment.storageBucket,
  //     messagingSenderId: environment.messagingSenderId,
  //     appId: environment.appId,
  //     measurementId: environment.measurementId
  //   };

  //   const app = initializeApp(firebaseConfig);
  //   getAnalytics(app);
  // }
}
