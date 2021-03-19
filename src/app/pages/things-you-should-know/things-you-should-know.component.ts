import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventHandlingService } from 'src/app/services/event-handling.service';
import { ServerCallService } from 'src/app/services/server-call.service';

@Component({
  selector: 'app-things-you-should-know',
  templateUrl: './things-you-should-know.component.html',
  styleUrls: ['./things-you-should-know.component.scss']
})
export class ThingsYouShouldKnowComponent implements OnInit {
  open: any = 'no';
  applicationId: any;
  obj = {
    "accountDetails": [
      {
        "optionsTrading": "",
        "yearOfExp": "",
        "optionsTradingKnowledge": "",
        "typeOfOptionTradingDone": "",
        "typeOfOptionTradinglikeToTrade": "",
        "PromoCode": ""
      }
    ],
    "personalInfo": [
      {
        "prefix": "",
        "fName": "",
        "lName": "",
        "initial": "",
        "dob": "",
        "sinNumber": "",
        "canadaCitizenship": ""
      }
    ]
  };
  constructor(private route: Router,
    private apiCall: ServerCallService,
    private pageFinished: EventHandlingService) { }

  ngOnInit(): void {
    this.apiCall.getApplicatioonId().then(data1 => {
      this.applicationId = data1[0];
    });
  }

  navigate() {
    this.apiCall.postAccountOpeningDetails(this.obj).then(response => {
      sessionStorage.setItem('id', response.id);
      this.pageFinished.pageFinishedEvent('moveStep2')
      this.route.navigate(['/account-selection']);
    });
  }

  openMore() {
    this.open = 'yes';
  }


}
