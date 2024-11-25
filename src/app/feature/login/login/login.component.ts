import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  correoElectronico: string = '';
  password: string = '';
  loginUrl = 'http://localhost:8080/api/v1/login';

  constructor(private http: HttpClient, private router: Router) {}

  onLogin(): void {
    const loginData = {
      correoElectronico: this.correoElectronico,
      password: this.password
    };

    this.http.post<{ message: string }>(this.loginUrl, loginData).pipe(
      catchError(error => {
        console.error('Error en el login:', error);
        // Verifica si hay un mensaje de error en la respuesta y lo muestra
        const errorMessage = error.error?.message || 'Error en el login. Verifique sus credenciales.';
        alert(`Login fallido: ${errorMessage}`);
        return of(null);
      })
    ).subscribe(response => {
      if (response) {
        // Guarda el correo en localStorage
        localStorage.setItem("userEmail", this.correoElectronico);

        // Muestra el mensaje de éxito
        alert(`Login exitoso: ${response.message}`);
        this.router.navigate(['/user-home']); // Redirige a user-home si el login es exitoso
      }
    });
  }

  onRegister(): void {
    this.router.navigate(['/register']);
  }
}
