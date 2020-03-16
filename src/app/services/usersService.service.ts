import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { User } from '../auth/auth.page';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from 'angularfire2/firestore';

@Injectable({
    providedIn: 'root'
})

export class UsersService {
    private users: Observable<User[]>;
    private usersCollection: AngularFirestoreCollection<User>;

    constructor(private afs: AngularFirestore) {
        this.usersCollection = this.afs.collection<User>('users');
        this.users = this.usersCollection.valueChanges();
    }

    getUsers(): Observable<User[]> {
        return this.users;
    }

    getUser(email: string) {
        var query = this.afs.collection('users', ref => ref.where('email', '==', email));
        console.log(query);
    }

    addUser(user: User): Promise<DocumentReference> {
        return this.usersCollection.add(user);
    }


}
