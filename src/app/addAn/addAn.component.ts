import { AnAddPayload } from './../authentication.service';
import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './addAn.component.html'
})
export class AnAddComponent {
  aninfo: AnAddPayload = {
    _id: '',
    topic: '',
    category: '',
    author: '',
    email: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  add() {
    this.auth.add(this.aninfo).subscribe(
      () => {
        this.router.navigateByUrl('/ans/add');
      },
      err => {
        console.error(err);
      }
    );
  }
}
