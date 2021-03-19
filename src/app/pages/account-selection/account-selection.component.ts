import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CheckboxRequiredValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectItemGroup } from 'primeng/api';
import { EventHandlingService } from 'src/app/services/event-handling.service';
import { ServerCallService } from 'src/app/services/server-call.service';

@Component({
  selector: 'app-account-selection',
  templateUrl: './account-selection.component.html',
  styleUrls: ['./account-selection.component.scss']
})
export class AccountSelectionComponent implements OnInit {
  step: string;
  cities: any;
  years: any;
  knowledge: any;
  selectedCountries: any;
  selectedCountries2: any;
  selectedCountries3: any;
  selectedCountries4: any;
  promoCodes: any;
  accountDetails: any;
  optionsTrading: string;
  yearOfExp: string;
  optionsTradingKnowledge: string;
  typeOfOptionTradingDone: string;
  typeOfOptionTradinglikeToTrade: string;
  PromoCode: string;
  totalResponse: any;
  validMsg: string;
  CheckVal: number;
  failedMsg: string;
  constructor(
    private route: Router,
    private apiCall: ServerCallService,
    private pageFinished: EventHandlingService) {
    this.cities = [
      'Long Calls/Puts',
      'Covered Calls/Puts',
      'Spread',
      'Never trade option before'
    ];

  }

  ngOnInit(): void {
    this.apiCall.getAccountOpeningDetailsById().then(accData => {
      this.totalResponse = accData;
      this.accountDetails = accData.accountDetails[0];
      this.optionsTrading = this.accountDetails.optionsTrading;
      this.yearOfExp = this.accountDetails.yearOfExp;
      this.optionsTradingKnowledge = this.accountDetails.optionsTradingKnowledge.split(',');
      this.typeOfOptionTradingDone = this.accountDetails.typeOfOptionTradingDone.split(',');
      this.typeOfOptionTradinglikeToTrade = this.accountDetails.typeOfOptionTradinglikeToTrade;
      this.PromoCode = this.accountDetails.PromoCode;
    });
    this.apiCall.getPromoCode().then(codes => {
      this.promoCodes = codes;
    });
  }

  select(step: string) {
    this.step = step;
  }

  evaluatePromoCode() {
    this.validMsg = '';
    this.CheckVal = 0;
    if (this.PromoCode) {
      for (let code of this.promoCodes) {
        if (code.code == this.PromoCode) {
          this.validMsg = 'Its is valid code';
          return '-';
        } else {
          this.CheckVal++;
        }
      }
      if (this.promoCodes.length == this.CheckVal) {
        this.failedMsg = 'Its is invalid code';
        return '';
      }
    } return '-';
  }

  navigate() {
    if (this.evaluatePromoCode() == '-') {
      let postObj = {
        'optionsTrading': this.optionsTrading,
        'yearOfExp': this.yearOfExp,
        'optionsTradingKnowledge': this.optionsTradingKnowledge,
        'typeOfOptionTradingDone': this.typeOfOptionTradingDone.toString(),
        'typeOfOptionTradinglikeToTrade': this.typeOfOptionTradinglikeToTrade.toString(),
        'PromoCode': this.PromoCode
      }
      this.totalResponse.accountDetails[0] = postObj;
      this.apiCall.updateAccountOpeningDetails(this.totalResponse).then(res => {
        console.log(res);
        this.pageFinished.pageFinishedEvent('moveStep3')
        this.route.navigate(['/personal-information']);
      });
    }
    // this.route.navigate(['/personal-information']);
  }

  selectTradingWindow(opt: string) {
    this.optionsTrading = opt;
  }



}
