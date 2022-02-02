import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KorisnikComponent } from './korisnik/korisnik.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { TrgovacComponent } from './trgovac/trgovac.component';

const routes: Routes = [
  { path: '', redirectTo: '/prijava', pathMatch: 'full' },
  { path: 'prijava', component: PrijavaComponent },
  { path: 'pocetna', component: PocetnaComponent },
  { path: 'korisnik', component: KorisnikComponent },
  { path: 'trgovac', component: TrgovacComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
