import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { EventHandlingService } from '../../services/event-handling.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  checkedValue: any;
  uiupdate: string;

  constructor(private pageFinished: EventHandlingService,
    private cd: ChangeDetectorRef,
    private ngZone: NgZone) {
    // pageFinished.onPageFinishedEvent.subscribe((obj) => {
    //   // this.checkedValue = obj;
    //   this.uiupdate = "";
    //   this.ngZone.run(() => {
    //     this.uiupdate = obj;
    //   });
    //   // this.uiupdate = this.checkedValue;
    //   this.cd.detectChanges();
    //   console.log("this.checkedValue", obj);
    // });
  }

  ngOnInit(): void {
  }

  onActivate(event) {
    window.scroll(0, 0);
    alert("hi")
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
  }

  ngDoCheck() {
    let path = window.location.pathname;
    if (path == "/account-selection") {
      this.uiupdate = "moveStep2";
    } else if (path == "/personal-information") {
      this.uiupdate = "moveStep3";
    } if (path == "/final-review") {
      this.uiupdate = "moveStep4";
    }
  }


}
