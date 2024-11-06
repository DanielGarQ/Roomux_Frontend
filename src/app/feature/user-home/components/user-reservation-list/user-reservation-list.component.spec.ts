import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReservationListComponent } from './user-reservation-list.component';

describe('UserReservationListComponent', () => {
  let component: UserReservationListComponent;
  let fixture: ComponentFixture<UserReservationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserReservationListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserReservationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
