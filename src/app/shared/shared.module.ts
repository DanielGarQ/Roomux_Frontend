import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralHeaderComponent } from './components/general-header/general-header/general-header.component';
import { SessionHeaderComponent } from './components/session-header/session-header/session-header.component';



@NgModule({
  declarations: [
    GeneralHeaderComponent,
    SessionHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GeneralHeaderComponent,
  ]
})
export class SharedModule { }
