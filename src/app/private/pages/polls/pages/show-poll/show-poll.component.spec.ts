import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPollComponent } from './show-poll.component';

describe('ShowPollComponent', () => {
  let component: ShowPollComponent;
  let fixture: ComponentFixture<ShowPollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPollComponent]
    });
    fixture = TestBed.createComponent(ShowPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
