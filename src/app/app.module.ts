import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { AppRoutingModule } from './app.routing.module';
import { LaptopPageComponent } from './components/laptop-page/laptop-page.component';
import { CommunicationCompanyComponent } from './components/communication-company/communication-company.component';
import { MountansComponent } from './components/mountans/mountans.component';
import { AlpsComponent } from './components/alps/alps.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { TripComponent } from './components/trip/trip.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    LaptopPageComponent,
    CommunicationCompanyComponent,
    MountansComponent,
    AlpsComponent,
    RoomsComponent,
    TripComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
