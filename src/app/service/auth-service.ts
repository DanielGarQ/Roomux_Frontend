import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('userEmail'); // Elimina el correo electrónico
    this.router.navigate(['/login']); // Redirige al inicio de sesión
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('userEmail'); // Devuelve true si el correo existe
  }
}
