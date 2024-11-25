import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Sala } from 'app/interfaces/models';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = 'http://localhost:8080/api/v1/reserva';

  private selectedSalaSubject = new BehaviorSubject<Sala | null>(null);
  selectedSala$ = this.selectedSalaSubject.asObservable();

  private reservationsSubject = new BehaviorSubject<any[]>([]); // Lista de reservas
  reservations$ = this.reservationsSubject.asObservable();

  private reservationsUpdatedSubject = new Subject<void>();
  reservationsUpdated$ = this.reservationsUpdatedSubject.asObservable();

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

  fetchReservations(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (reservations) => {
        this.reservationsSubject.next(reservations); // Actualizamos la lista en el BehaviorSubject
      },
      (error) => {
        console.error('Error al obtener las reservas:', error);
      }
    );
  }

  notifyReservationsUpdated(): void {
    this.reservationsUpdatedSubject.next();
  }

}
