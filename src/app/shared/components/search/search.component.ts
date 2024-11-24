import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Sala } from 'app/interfaces/models';
import { SearchService } from 'app/service/search-service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchTerm: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  searchQuery: string = ''; // Para almacenar el texto ingresado
  salas: Sala[] = []; // Lista completa de salas
  filteredSalas: Sala[] = []; // Salas filtradas por búsqueda

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    // Cargar todas las salas al iniciar
    this.searchService.getSalas().subscribe(
      (data: Sala[]) => {
        this.salas = data;
        this.filteredSalas = data; // Mostrar todas las salas al inicio
      },
      (error) => {
        console.error('Error al cargar las salas:', error);
      }
    );
  }

  onSearch(): void {
    // Filtrar las salas según el nombre
    const query = this.searchQuery.toLowerCase().trim();
    this.filteredSalas = this.salas.filter((sala) =>
      sala.nombre.toLowerCase().includes(query)
    );
  }

}
