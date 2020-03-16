import { Component, OnInit } from '@angular/core';
import { User } from '../../auth/auth.page';
import { UsersService } from 'src/app/services/usersService.service';
import * as firebase from 'firebase/app';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-rubric',
  templateUrl: './rubric.page.html',
  styleUrls: ['./rubric.page.scss'],
})
export class RubricPage implements OnInit {
  range1Value = 1;
  range2Value = 1;
  total = 0;
  users: User[];
  email:string;
  currentUser;
  user: User = {
    email: '13mangeshpuri@gmail.com',
    password: '',
    isDone: [
      {teamName: 'DemoTeam', done: false, marks: 0},
      {teamName: 'DemoTeam 2', done: false, marks: 1}
    ]
  };

  constructor(private usersService: UsersService,
              private storage: Storage,
              private router: Router) {
    
    // this.usersService.addUser(this.user);
    this.range1Value = 4;
    this.range2Value = 2;
    this.storage.get('email').then((val) => {
      this.email = val;
      console.log(this.email);
      
    });
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
      this.users.forEach(user => {
        if (user.email === this.email ) {
          this.currentUser = user;
        }
      });
    });

    console.log(this.usersService.getUser('13mangeshpuri@gmail.com'));
    
   }

  ngOnInit() {
    this.currentUser = firebase.auth().currentUser;
    console.log(this.currentUser);
  }

  onSubmit() {
    this.total = this.range1Value + this.range2Value;
    this.currentUser['isDone'].forEach(element => {
      if (element['teamName'] === 'DemoTeam') {
        this.currentUser['isDone'][0].marks = this.total;
        this.currentUser['isDone'][0].done = true;
        
        this.router.navigate(['/home']);
      }
    });
    
    
  }

}
