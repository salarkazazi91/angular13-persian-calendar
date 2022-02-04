import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgPersianDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
