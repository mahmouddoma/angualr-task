import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LresourcesComponent } from './lresources/lresources.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SecondComponentComponent } from './second-component/second-component.component';

// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    LresourcesComponent,
    ToggleButtonComponent,
    SecondComponentComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    // MatDatepickerModule,
    // MatInputModule,
    BsDatepickerModule.forRoot()
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
