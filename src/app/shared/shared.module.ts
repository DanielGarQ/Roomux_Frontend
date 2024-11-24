import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralHeaderComponent } from './components/general-header/general-header/general-header.component';
import { SessionHeaderComponent } from './components/session-header/session-header/session-header.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalReservationComponent } from './components/modal-reservation/modal-reservation.component';
import { NgModel } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    GeneralHeaderComponent,
    SessionHeaderComponent,
    ModalReservationComponent,
    SearchComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbDatepickerModule

  ],
  exports: [
    GeneralHeaderComponent,
    ModalReservationComponent,
    SearchComponent,
  ]
})
export class SharedModule { }
