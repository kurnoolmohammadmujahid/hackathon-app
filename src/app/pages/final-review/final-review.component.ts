import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerCallService } from 'src/app/services/server-call.service';

@Component({
  selector: 'app-final-review',
  templateUrl: './final-review.component.html',
  styleUrls: ['./final-review.component.scss']
})
export class FinalReviewComponent implements OnInit {
  totalResponse: any;

  constructor(private route: Router,
    private apiCall: ServerCallService) { }

  ngOnInit(): void {
    this.apiCall.getAccountOpeningDetailsById().then(accData => {
      this.totalResponse = accData;
    });
  }

  edit1() {
    this.route.navigate(["/account-selection"])
  }

  edit2() {
    this.route.navigate(["/personal-information"])
  }

  submit() {
    alert("Account and personal details submitted succefully")
    sessionStorage.clear();
    this.route.navigate(["/things-you-should-know"])
  }

}
