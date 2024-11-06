import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserHomeRoutingModule } from "./user-home-routing.module";
import { SharedModule } from '../../shared/shared.module';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { UserReservationListComponent } from './components/user-reservation-list/user-reservation-list.component';


@NgModule({
  declarations: [
    UserHomeComponent,
    ReservationListComponent,
    UserReservationListComponent

  ],
  imports: [
    CommonModule,
    UserHomeRoutingModule,
    SharedModule,
  ]
})
export class UserHomeModule { }
