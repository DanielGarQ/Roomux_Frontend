import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralHeaderComponent } from './components/general-header/general-header/general-header.component';
import { SessionHeaderComponent } from './components/session-header/session-header/session-header.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalReservationComponent } from './components/modal-reservation/modal-reservation.component';



@NgModule({
  declarations: [
    GeneralHeaderComponent,
    SessionHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ],
  exports: [
    GeneralHeaderComponent,
  ]
})
export class SharedModule { }
