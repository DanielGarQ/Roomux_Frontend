import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { CoreModule} from "./core/core.module";
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './feature/login/login/login.component';
import { RegisterComponent } from './feature/login/register/register/register.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "./core/footer/footer/footer.component";
import { UserHomeModule } from './feature/user-home/user-home.module';
import { ModalReservationComponent } from './shared/components/modal-reservation/modal-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    FormsModule,
    UserHomeModule,
],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
