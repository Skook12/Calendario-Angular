import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponenterefaComponent } from './componenterefa/componenterefa.component';

@NgModule({
  declarations: [
    AppComponent,
    NewcomponentComponent,
    ComponenterefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
