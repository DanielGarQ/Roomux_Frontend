import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'app/service/reservation-service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss'],
})
export class ReservationListComponent implements OnInit {
  filtroBusqueda: string = '';
  salas: { nombre: string }[] = [
    { nombre: 'EDC' },
    { nombre: 'PRODUCTIVIDAD' },
    { nombre: 'REDES' },
    { nombre: 'MULTIMEDIA' },
    { nombre: 'COLEGIO 207' },
    { nombre: 'COLEGIO 307' },
  ];
  laboratorios: { nombre: string }[] = [
    { nombre: 'FISICA' },
    { nombre: 'BIOLOGIA' },
    { nombre: 'QUIMICA' },
  ];

  salasFiltradas: { nombre: string }[] = [];
  laboratoriosFiltrados: { nombre: string }[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    // Inicializar las listas filtradas con todas las salas y laboratorios
    this.salasFiltradas = [...this.salas];
    this.laboratoriosFiltrados = [...this.laboratorios];
  }

  filtrarSalas(): void {
    const filtro = this.filtroBusqueda.toLowerCase();

    // Filtrar salas y laboratorios según el texto de búsqueda
    this.salasFiltradas = this.salas.filter((sala) =>
      sala.nombre.toLowerCase().includes(filtro)
    );
    this.laboratoriosFiltrados = this.laboratorios.filter((lab) =>
      lab.nombre.toLowerCase().includes(filtro)
    );
  }

  onReservarClick(salaNombre: string): void {
    this.reservationService.setSelectedSala({ nombre: salaNombre });
  }
}
