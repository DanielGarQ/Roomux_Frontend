import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserHomeRoutingModule } from "./user-home-routing.module";
import { SharedModule } from '../../shared/shared.module';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { UserReservationListComponent } from './components/user-reservation-list/user-reservation-list.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalReservationComponent } from '../../shared/components/modal-reservation/modal-reservation.component';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@NgModule({
  declarations: [
    UserHomeComponent,
    ReservationListComponent,
    UserReservationListComponent,
  ],
  imports: [
    CommonModule,
    UserHomeRoutingModule,
    NgbModalModule,
    SharedModule,
    FormsModule // Añadir FormsModule aquí
  ]
})
export class UserHomeModule { }
