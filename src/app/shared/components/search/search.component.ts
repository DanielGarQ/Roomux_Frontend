import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchTerm: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  onSearch(): void {
    this.searchEvent.emit(this.searchTerm);

}}
