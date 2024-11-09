// src/app/models.ts

export interface DetalleReserva {
  identificador: string;
  diaSemanal: string;
  horaInicio: string;
  horaFin: string;
}

export interface Autor {
  identificador: string;
  correoElectronico: string;
  password: string;
}

export interface Reserva {
  identificador: string;
  autor: Autor;
  fechaInicio: string;
  fechaFin: string;
  tipoReserva: string;
  frecuencia: string;
  horaCreacion: string;
  nombreSala: string;
  detalleReserva: DetalleReserva[];
}

export interface RespuestaReservas {
  data: Reserva[];
  message: string;
}

export interface Sala {
  nombre: string; // El nombre de la sala
}

