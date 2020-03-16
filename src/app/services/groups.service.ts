import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from 'angularfire2/firestore';
import { map, take } from 'rxjs/operators';


export interface Group {
    groupId: string;
    name: string;
    marks: any;
    time: string;
}

@Injectable({
    providedIn: 'root'
})

export class GroupsService 
{
    private groups: Observable<Group[]>;
    private groupsCollection: AngularFirestoreCollection<Group>;

    constructor(private afs: AngularFirestore) {
        this.groupsCollection = this.afs.collection<Group>('groups');
        this.groups = this.groupsCollection.valueChanges();
        console.log("in groupservice constructor");
        console.log(this.groups);
    }

    getGroups(): Observable<Group[]> 
    {
        console.log("in getGroups method");
        return this.groups;
    }

    addGroup(group: Group): Promise<DocumentReference> {
        return this.groupsCollection.add(group);
    }
    // getGroupById(id:Number):
    // {
    //     return this.groups
    // }
}