import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KorisnikComponent } from './korisnik/korisnik.component';
import { KurirAkcijeComponent } from './kurir-akcije/kurir-akcije.component';
import { KurirComponent } from './kurir/kurir.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { TrgovacAkcijeComponent } from './trgovac-akcije/trgovac-akcije.component';
import { TrgovacComponent } from './trgovac/trgovac.component';
import { UplataAkcijeComponent } from './uplata-akcije/uplata-akcije.component';
import { UplataComponent } from './uplata/uplata.component';

const routes: Routes = [
  { path: '', redirectTo: '/prijava', pathMatch: 'full' },
  { path: 'prijava', component: PrijavaComponent },
  { path: 'pocetna', component: PocetnaComponent },
  { path: 'korisnik', component: KorisnikComponent },
  { path: 'trgovac', component: TrgovacComponent },
  { path: 'trgovac/:id', component: TrgovacAkcijeComponent },
  { path: 'trgovac/novi', component: TrgovacAkcijeComponent },
  { path: 'kurir', component: KurirComponent },
  { path: 'kurir/:id', component: KurirAkcijeComponent },
  { path: 'kurir/novi', component: KurirAkcijeComponent },
  { path: 'uplata', component: UplataComponent },
  { path: 'uplata/:id', component: UplataAkcijeComponent },
  { path: 'uplata/novi', component: UplataAkcijeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }