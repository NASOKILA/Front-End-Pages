import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarsComponent } from '../app/components/cars/cars.component';
import { LaptopPageComponent } from '../app/components/laptop-page/laptop-page.component';
import { CommunicationCompanyComponent } from '../app/components/communication-company/communication-company.component';
import { MountansComponent } from './components/mountans/mountans.component';
import { AlpsComponent } from './components/alps/alps.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { TripComponent } from './components/trip/trip.component';
import { FormComponent } from './components/form/form.component';

const routes = [
    { path: '',  children: [

        { path: 'cars', component: CarsComponent },
        { path: 'trip', component: TripComponent },
        { path: 'trips', component: TripComponent },
        { path: 'laptops', component: LaptopPageComponent },
        { path: 'company', component: CommunicationCompanyComponent },
        { path: 'mountains', component: MountansComponent },
        { path: 'alps', component: AlpsComponent },
        { path: 'rooms', component: RoomsComponent },
        { path: 'form', component: FormComponent }
        
    ]}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { };
