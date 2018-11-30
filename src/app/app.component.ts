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
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    };

    firebase.initializeApp(config);
    firebase.firestore().settings(settings);

  }
  title = 'angular6-firestore';
}
