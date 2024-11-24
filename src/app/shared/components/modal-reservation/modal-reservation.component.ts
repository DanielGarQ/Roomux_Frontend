import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'app/service/reservation-service';
import { Sala } from 'app/interfaces/models';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-modal-reservation',
  templateUrl: './modal-reservation.component.html',
  styleUrls: ['./modal-reservation.component.scss'],
  providers: [DatePipe]  // Proveedor para usar DatePipe
})
export class ModalReservationComponent implements OnInit {
  today: string = '';
  selectedSala: Sala | null = null;

  reservationData = {
    identificador: 'ffffffff-ffff-ffff-ffff-ffffffffffff',
    autor: {
      correoElectronico: localStorage.getItem('userEmail'),
      password: ''
    },
    fechaInicio: '',
    fechaFin: '',
    tipoReserva: 'UNICA',
    frecuencia: 'MENSUAL',
    horaCreacion: '2024-10-10T15:30:00',
    nombreSala: '',
    detalleReserva: [
      {
        diaSemanal: 'LUNES',
        horaInicio: '',
        horaFin: ''
      }
    ]
  };

  constructor(
    private reservationService: ReservationService,
    private datePipe: DatePipe  // Inyección de DatePipe
  ) {}

  ngOnInit(): void {

    const now = new Date();
    this.today = now.toISOString().split('T')[0];

    // Nos suscribimos al servicio para obtener la sala seleccionada
    this.reservationService.selectedSala$.subscribe(sala => {
      this.selectedSala = sala;
      if (this.selectedSala) {
        // Actualizar el nombre de la sala seleccionada
        this.reservationData.nombreSala = this.selectedSala.nombre;
      }
    });
  }

  reservar(): void {
    // Validar fecha de inicio y asignar la misma a fecha de fin

    if (this.reservationData.fechaInicio < this.today) {
      window.alert('La fecha de inicio no puede ser anterior a la fecha actual.');
      return;
    }

    if (this.reservationData.fechaInicio) {
      const fechaInicio = new Date(this.reservationData.fechaInicio);
      if (!isNaN(fechaInicio.getTime())) {
        // Asegurarnos de que la fecha esté en UTC y convertirla a formato ISO
        const fechaUTC = new Date(Date.UTC(fechaInicio.getUTCFullYear(), fechaInicio.getUTCMonth(), fechaInicio.getUTCDate()));
        this.reservationData.fechaInicio = fechaUTC.toISOString();  // Enviar en formato ISO con UTC
        this.reservationData.fechaFin = fechaUTC.toISOString();     // Asignar el mismo valor a fechaFin
      } else {
        window.alert('Fecha de inicio no válida');
        return;
      }
    }

    // Formatear horaInicio y horaFin en detalleReserva
    this.reservationData.detalleReserva.forEach(d => {
      if (d.horaInicio) {
        const horaInicio = new Date(`1970-01-01T${d.horaInicio}`);
        if (!isNaN(horaInicio.getTime())) {
          d.horaInicio = this.datePipe.transform(horaInicio, 'HH:mm:ss')!;
        } else {
          window.alert('Hora de inicio no válida');
          return;
        }
      }

      if (d.horaFin) {
        const horaFin = new Date(`1970-01-01T${d.horaFin}`);
        if (!isNaN(horaFin.getTime())) {
          d.horaFin = this.datePipe.transform(horaFin, 'HH:mm:ss')!;
        } else {
          window.alert('Hora de fin no válida');
          return;
        }
      }
    });

    // Llamar al servicio para enviar los datos al backend
    this.reservationService.saveReservation(this.reservationData).subscribe(
      response => {
        const successMessage = response.message || 'Reserva realizada con éxito';
        window.alert(successMessage);
      },
      error => {
        const errorMessage = error.error?.message || 'Error al realizar la reserva';
        window.alert(errorMessage);
      }
    );
  }
}


