import { Component, OnInit } from '@angular/core';
import { User } from '././../auth/auth.page';
import { UsersService } from 'src/app/services/usersService.service';
import * as firebase from 'firebase/app';
import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.page.html',
  styleUrls: ['./group-info.page.scss'],
})
export class GroupInfoPage implements OnInit {

  range1Value = 1;
  range2Value = 1;
  range3Value = 1;
  range4Value = 1;
  range5Value = 1;
  total = 0;
  users: User[]; //to store array of all users
  groupId:number;
  email:string;
  currentUser;

  constructor(private usersService: UsersService,
              private storage: Storage,
              private router: Router,
              private route:ActivatedRoute,
              private fs:FirestoreService) 
    {
    console.log("in group info constructor");
    this.storage.get('email').then((val) => {
      this.email = val;
      console.log(this.email);
      
    });
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
      this.users.forEach(user => {
        if (user.email === this.email ) {
          this.currentUser = user;
          console.log("currnt user is");
          console.log(user);
        }
      });
    });
    this.groupId=this.route.snapshot.params['id'];
    console.log("groupid is "+ this.groupId);
    
   }

  ngOnInit() {
    this.currentUser = firebase.auth().currentUser;
    console.log("ngoninit of grouppage");
    console.log(this.currentUser);
  }

  onSubmit() {
    console.log("entered in onsubmit")
    this.total = this.range1Value + this.range2Value+this.range3Value+this.range4Value+this.range5Value;
    
        this.currentUser['isDone'][this.groupId].marks = this.total;
        this.currentUser['isDone'][this.groupId].done = true;
        console.log("updated marks");
        console.log(this.currentUser);
        this.fs.updateUser(this.currentUser);
        this.router.navigate(['/home']);
      
  
    
    
  }

}
