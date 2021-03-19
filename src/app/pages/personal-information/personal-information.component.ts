import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventHandlingService } from 'src/app/services/event-handling.service';
import { ServerCallService } from 'src/app/services/server-call.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
  prefix: any;
  fName: any;
  lName: any;
  initial: any;
  dob: any;
  sinNumber: any;
  canadaCitizenship: any;
  totalResponse: any;
  accountDetails: any;
  constructor(private route: Router,
    private apiCall: ServerCallService,
    private pageFinished: EventHandlingService) { }

  ngOnInit(): void {
    this.prefix = "";
    this.fName = "";
    this.lName = "";
    this.initial = "";
    this.dob = "";
    this.sinNumber = "";
    this.canadaCitizenship = "";
    this.apiCall.getAccountOpeningDetailsById().then(accData => {
      this.totalResponse = accData;
      this.accountDetails = accData.personalInfo[0];
      this.prefix = this.accountDetails.prefix;
      this.fName = this.accountDetails.fName;
      this.lName = this.accountDetails.lName;
      this.initial = this.accountDetails.initial;
      this.dob = this.accountDetails.dob;
      this.sinNumber = this.accountDetails.sinNumber;
      this.canadaCitizenship = this.accountDetails.canadaCitizenship;
    });

  }

  navigate() {
    if (
      this.prefix != '' &&
      this.fName != '' &&
      this.lName != '' &&
      this.initial != '' &&
      this.dob != '' &&
      this.sinNumber != '' &&
      this.canadaCitizenship != ''
    ) {
      let postObj = {
        "prefix": this.prefix,
        "fName": this.fName,
        "lName": this.lName,
        "initial": this.initial,
        "dob": this.dob,
        "sinNumber": this.sinNumber,
        "canadaCitizenship": this.canadaCitizenship
      }
      this.totalResponse.personalInfo[0] = postObj;
      this.apiCall.updateAccountOpeningDetails(this.totalResponse).then(res => {
        console.log(res);
        this.pageFinished.pageFinishedEvent('moveStep4')
        this.route.navigate(['/final-review']);
      });
      // this.route.navigate(['/final-review']);
    } else {
      alert('Enter all fileds')
    }
  }

  citizen(citi: string) {
    this.canadaCitizenship = citi;
  }

  prefixSelect(pref: string) {
    this.prefix = pref;
  }

}