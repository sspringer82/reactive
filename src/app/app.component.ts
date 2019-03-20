import { Component } from '@angular/core';
import { StoreService, User } from './store.service';
import { Observable } from 'rxjs';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'reactive';

  data: Observable<User[]>;

  constructor(public store: StoreService, public http: HttpClient) {}

  onInit() {
    this.http
      .get('/foo')
      .mergeMap(v => Observable.from(v))
      .subscribe(d => console.log(d));

    this.store.obs
      .pipe(map(a => a.filter(u => u.name.length > 10)))
      .subscribe(v => v.filter(u => u.name.length > 10));
  }
}
