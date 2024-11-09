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
  selectedSala: Sala | null = null;

  // Modificar la estructura para incluir 'horaInicio' y 'horaFin' en 'detalleReserva'
  reservationData = {
    identificador: 'ffffffff-ffff-ffff-ffff-ffffffffffff',
    autor: {
      correoElectronico: 'alejandro.gomez8332@uco.net.co',
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
        diaSemanal: 'NO_ASINADO',
        horaInicio: '',  // Asegúrate de que 'horaInicio' esté presente
        horaFin: ''      // Asegúrate de que 'horaFin' esté presente
      }
    ]
  };

  constructor(
    private reservationService: ReservationService,
    private datePipe: DatePipe  // Inyección de DatePipe
  ) {}

  ngOnInit(): void {
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
    // Validar que las fechas son correctas antes de formatear
    const fechaInicio = new Date(this.reservationData.fechaInicio);
    const fechaFin = new Date(this.reservationData.fechaFin);

    if (isNaN(fechaInicio.getTime())) {
      console.error('Fecha no válida');
      return; // Detener si alguna fecha es inválida
    }

    // Formatear las fechas a cadenas en formato ISO 8601
    this.reservationData.fechaInicio = this.datePipe.transform(fechaInicio, 'yyyy-MM-dd')!;

    // Validar horaInicio y horaFin en detalleReserva antes de formatear
    const horaInicio = new Date(this.reservationData.detalleReserva[0].horaInicio);
    const horaFin = new Date(this.reservationData.detalleReserva[0].horaFin);

    if (isNaN(horaInicio.getTime()) || isNaN(horaFin.getTime())) {
      console.error('Hora no válida');
      return; // Detener si alguna hora es inválida
    }

    // Formatear horaInicio y horaFin en detalleReserva
    this.reservationData.detalleReserva[0].horaInicio = this.datePipe.transform(horaInicio, 'HH:mm:ss')!;
    this.reservationData.detalleReserva[0].horaFin = this.datePipe.transform(horaFin, 'HH:mm:ss')!;

    console.log("Datos de la reserva:", this.reservationData);

    // Llamar al servicio para enviar los datos al backend
    this.reservationService.saveReservation(this.reservationData).subscribe(response => {
      // Aquí puedes agregar la lógica que necesites después de la respuesta
      console.log('Reserva realizada con éxito', response);
    }, error => {
      // Manejar errores
      console.error('Error al realizar la reserva', error);
    });
  }
}


