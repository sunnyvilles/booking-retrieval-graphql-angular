import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckinComponent } from './components/checkin/checkin.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: 'retrieve-booking', component: CheckinComponent },
  { path: 'booking-details', component: DetailsComponent },
  { path: '', redirectTo: 'retrieve-booking', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
