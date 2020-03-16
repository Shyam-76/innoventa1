import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Platform } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { Storage } from '@ionic/storage';

export class User {
  email: string;
  password: string;
  isDone: any;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})

export class AuthPage implements OnInit {

  email: string;
  password: string;
  public user: User = new User();

  constructor(public fAuth: AngularFireAuth,
              public router: Router,
              public platform: Platform,
              public storage: Storage)
             { 
                this.fAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(data => {
                  console.log(data);
                })
              }

  ngOnInit()
  {
  }

  async login() 
  {
    try {
      var r = await this.fAuth.auth.signInWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      if (r) 
      {
        console.log("in async auth");
        console.log(r);
        console.log('Successfully logged in ');
        // this.nativeStorage.setItem('credential', {userName: 'this.user.email', password: 'this.user.password'});
        console.log("success");
          // set a key/value
          console.log(Date.now());
        this.storage.set('email', this.user.email);

  // Or to get a key/value pair
        this.router.navigate(['/home']);
      }
    } catch (err) {
      console.log(err);
    }
  }


}
