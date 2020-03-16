import { Component } from '@angular/core';
import { Group, GroupsService } from '../services/groups.service';
import * as firebase from 'firebase/app';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentUser: firebase.User;
  groups: Group[];
  group: Group = {
    groupId : '1',
    name: 'DemoTeam',
    marks: [1,2,3],
    time: 'Morning'
  }

  constructor(private groupsService: GroupsService,
              private storage: Storage) {
                this.storage.get('email').then((val) => {
                  console.log("in home.page.ts");
                  console.log(val);
                });
    this.currentUser = firebase.auth().currentUser;
    console.log("this.currentUser");
    console.log(this.currentUser);
    // this.groupsService.addGroup(this.group);
    this.groupsService.getGroups().subscribe(data => {
      this.groups = data;
    });
  }

}
