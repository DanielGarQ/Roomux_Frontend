import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-reservation',
  templateUrl: './modal-reservation.component.html',
  styleUrl: './modal-reservation.component.scss'
})
export class ModalReservationComponent {

  startDate: string = '';
  endDate: string = '';
  reservationDay: string = '';

  daysOfWeek: string[] = [
    'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'
  ];

}
