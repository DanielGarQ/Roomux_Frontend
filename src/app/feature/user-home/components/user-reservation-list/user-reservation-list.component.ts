import { Component } from '@angular/core';

@Component({
  selector: 'app-user-reservation-list',
  templateUrl: './user-reservation-list.component.html',
  styleUrl: './user-reservation-list.component.scss'
})
export class UserReservationListComponent {
  showReservations = false; // Controla la visibilidad de la columna
  reservas = [
    { id: 1, nombre: 'Sala 101' },
    { id: 2, nombre: 'Sala 202' },
    { id: 3, nombre: 'Sala 303' }
  ];

  toggleReservations() {
    this.showReservations = !this.showReservations; // Alterna visibilidad
  }
}

