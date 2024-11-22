// src/app/user-reservation-list/user-reservation-list.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Reserva, RespuestaReservas } from 'app/interfaces/models'; // Importa las interfaces

@Component({
  selector: 'app-user-reservation-list',
  templateUrl: './user-reservation-list.component.html',
  styleUrls: ['./user-reservation-list.component.scss']
})
export class UserReservationListComponent implements OnInit {
  reservas: Reserva[] = []; // Usamos la interfaz Reserva
  email: string = 'alejandro.gomez8332@uco.net.co'; // Correo electrónico del usuario
  private apiUrl = 'http://10.100.64.217:8080/api/v1/reserva/autor'; // URL de la API

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerReservasPorUsuario(this.email);
  }

  obtenerReservasPorUsuario(email: string): void {
    const params = new HttpParams().set('email', email); // Agregar parámetro de correo
    this.http.get<RespuestaReservas>(this.apiUrl, { params }).subscribe(
      (response) => {
        this.reservas = response.data; // Asignamos las reservas recibidas
      },
      (error) => {
        console.error('Error al obtener las reservas:', error);
      }
    );
  }
}



