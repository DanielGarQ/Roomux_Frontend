import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserHomeRoutingModule } from "./user-home-routing.module";
import { SharedModule } from '../../shared/shared.module';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { UserReservationListComponent } from './components/user-reservation-list/user-reservation-list.component';
import { SearchComponent } from '../../shared/components/search/search.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalReservationComponent } from '../../shared/components/modal-reservation/modal-reservation.component';

@NgModule({
  declarations: [
    UserHomeComponent,
    ReservationListComponent,
    UserReservationListComponent,
    SearchComponent

  ],
  imports: [
    CommonModule,
    UserHomeRoutingModule,
    SharedModule,
    NgbModalModule,

  ]
})
export class UserHomeModule { }
