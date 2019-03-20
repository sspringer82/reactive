import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class User {
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  public obs: Observable<User[]>;
  private sub: Subject<User[]>;

  private data: User[];

  constructor() {
    this.obs = this.sub.asObservable();
  }

  add(user: User) {
    this.data.push(user);
    this.sub.next(this.data);
  }
}
