import { Component } from '@angular/core';
import { ReservationService } from 'app/service/reservation-service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.scss'
})

export class ReservationListComponent {
  constructor(private reservationService: ReservationService) {}

  // Método que se ejecuta al hacer clic en "Reservar"
  onReservarClick(salaNombre: string): void {
    // Pasamos el nombre de la sala al servicio
    this.reservationService.setSelectedSala({ nombre: salaNombre });
}
}
