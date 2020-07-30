import { Component } from '@angular/core';
import { AuthenticationService, AnDetails } from '../authentication.service';

@Component({
  templateUrl: './anList.component.html'
})
export class AnListComponent {
  andetails: AnDetails;

  constructor(private auth: AuthenticationService) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.auth.anprofile().subscribe(
      an => {
        this.andetails = an;
      },
      err => {
        console.error(err);
      }
    );
  }
}
