import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Sala } from 'app/interfaces/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = 'http://localhost:8080/api/v1/reserva';

  private selectedSalaSubject = new BehaviorSubject<Sala | null>(null);
  selectedSala$ = this.selectedSalaSubject.asObservable();

  constructor(private http: HttpClient) {}

  setSelectedSala(sala: Sala) {
    this.selectedSalaSubject.next(sala);
  }

  getSelectedSala() {
    return this.selectedSalaSubject.getValue();
  }

  saveReservation(reservationData: any): Observable<any> {
    return this.http.post(this.apiUrl, reservationData);
  }

}
