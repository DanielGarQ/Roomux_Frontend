import { Component } from '@angular/core';
import { AuthService } from 'app/service/auth-service';

@Component({
  selector: 'app-session-header',
  templateUrl: './session-header.component.html',
  styleUrl: './session-header.component.scss'
})
export class SessionHeaderComponent {

  constructor(private authService: AuthService) {}

  onLogout(): void {
    this.authService.logout(); // Llama al servicio para cerrar sesión
  }


}
