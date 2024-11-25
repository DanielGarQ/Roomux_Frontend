import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Reserva, RespuestaReservas } from 'app/interfaces/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-reservation-list',
  templateUrl: './user-reservation-list.component.html',
  styleUrls: ['./user-reservation-list.component.scss']
})
export class UserReservationListComponent implements OnInit {
  reservas: Reserva[] = []; // Lista de reservas
  email: string | null = null;
  private apiUrlConsulta = 'http://localhost:8080/api/v1/reserva/autor'; // URL base de la API
  private apiEliminar = 'http://localhost:8080/api/v1/reserva';
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.email = localStorage.getItem('userEmail');

    if (this.email) {
      this.obtenerReservasPorUsuario(this.email);
    } else {
      alert('Por favor, inicie sesión');
      this.router.navigate(['/user-reservations']);
    }
  }

  obtenerReservasPorUsuario(email: string): void {
    const params = new HttpParams().set('email', email); // Agregar parámetro de correo
    this.http.get<RespuestaReservas>(this.apiUrlConsulta, { params }).subscribe(
      (response) => {
        this.reservas = response.data; // Asignamos las reservas recibidas
      },
      (error) => {
        console.error('Error al obtener las reservas:', error);
        alert('Hubo un problema al cargar las reservas.');
      }
    );
  }

  eliminarReserva(identificador: string): void {
    if (!confirm('¿Estás seguro de que deseas eliminar esta reserva?')) {
      return; // Detener si el usuario cancela
    }

    const params = new HttpParams().set('identificador', identificador); // Agregar el identificador como parámetro

    this.http.delete(this.apiEliminar, { params }).subscribe(
      () => {
        alert('Reserva eliminada con éxito.');
        // Eliminar la reserva de la lista localmente
        this.reservas = this.reservas.filter(reserva => reserva.identificador !== identificador);
      },
      (error) => {
        console.error('Error al eliminar la reserva:', error);
        alert('Hubo un error al intentar eliminar la reserva. Intenta de nuevo.');
      }
    );
  }
}
