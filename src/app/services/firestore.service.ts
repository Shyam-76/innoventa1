import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore'
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService
 {
    email:string
  constructor(public firestore: AngularFirestore,private storage:Storage) {
    this.storage.get('email').then((val) => {
        this.email = val;
        console.log(this.email);
        
      });
  }
  
  updateUser(user:any)
  {
      console.log("in firestore service");
      console.log(user.isDone);
      this.firestore.collection('users').doc(this.email).update(
      {    isDone : user.isDone}
      );
  }
  

}

