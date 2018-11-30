import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    const settings = {timestampsInSnapshots: true};
    const config = {
      apiKey: "AIzaSyAmeCdnfC3R518kWcdjlKEYyId8mvjFnXI",
      authDomain: "fir-crud-d0f70.firebaseapp.com",
      databaseURL: "https://fir-crud-d0f70.firebaseio.com",
      projectId: "fir-crud-d0f70",
      storageBucket: "fir-crud-d0f70.appspot.com",
      messagingSenderId: "922679451787"
    };

    firebase.initializeApp(config);
    firebase.firestore().settings(settings);

  }
  title = 'angular6-firestore';
}
