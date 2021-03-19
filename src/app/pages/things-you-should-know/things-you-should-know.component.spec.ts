import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsYouShouldKnowComponent } from './things-you-should-know.component';

describe('ThingsYouShouldKnowComponent', () => {
  let component: ThingsYouShouldKnowComponent;
  let fixture: ComponentFixture<ThingsYouShouldKnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThingsYouShouldKnowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingsYouShouldKnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
