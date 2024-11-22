import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  nombre: string = '';
  correo: string = '';
  id: string = '';
  password: string = '';
  confirmarPassword: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onRegister() {
    if (this.password !== this.confirmarPassword) {
      alert('Las contraseñas no coinciden. Por favor, verifica.');
      return;
    }

    const url = 'http://10.100.64.217:8080/api/v1/register';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      nombre: this.nombre,
      id: this.id,
      correo: this.correo,
      password: this.password
    };

    this.http.post<{ message: string }>(url, body, { headers }).subscribe(
      (response) => {
        // Muestra un alert con el mensaje de éxito del servidor
        alert('Registro exitoso: ' + response.message);
        this.router.navigate(['/user-home']); // Redirige a la vista de login
      },
      (error) => {
        // Muestra un alert con el mensaje de error del servidor
        alert((error.error?.message || 'Error desconocido'));
      }
    );
  }

  onCancel() {
    // Limpia los campos del formulario
    this.nombre = '';
    this.correo = '';
    this.id = '';
    this.password = '';
    this.confirmarPassword = '';
  }
}
