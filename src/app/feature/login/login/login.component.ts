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
        alert('Error en el login. Verifique sus credenciales.');
        return of(null);
      })
    ).subscribe(response => {
      if (response) {
        alert(`Login exitoso: ${response.message}`);
        this.router.navigate(['/user-home']); // Redirige a user-home si el login es exitoso
      } else {
        alert('Login fallido. Verifique sus credenciales.');
      }
    });
  }

  onRegister(): void {
    this.router.navigate(['/register']);
  }
}
