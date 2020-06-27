import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyByyBOZXVKOZnuU-N_AYs7SBALFNYNqPd0",
      authDomain: "recipe-project-b1e10.firebaseapp.com",
    })
  }
  /* loadedFeature='recipe';
  onNavigate(feature: string){
    this.loadedFeature=feature;
  } */
}
