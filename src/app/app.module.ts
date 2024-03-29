import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { KorisnikComponent } from './korisnik/korisnik.component';
import { MatSelectModule } from '@angular/material/select';
import { PrijavaComponent } from './prijava/prijava.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { TrgovacComponent } from './trgovac/trgovac.component';
import { MatTableModule } from '@angular/material/table';
import { TrgovacAkcijeComponent } from './trgovac-akcije/trgovac-akcije.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { KurirComponent } from './kurir/kurir.component';
import { KurirAkcijeComponent } from './kurir-akcije/kurir-akcije.component';
import { UplataComponent } from './uplata/uplata.component';
import { UplataAkcijeComponent } from './uplata-akcije/uplata-akcije.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    KorisnikComponent,
    PrijavaComponent,
    PocetnaComponent,
    TrgovacComponent,
    TrgovacAkcijeComponent,
    DialogComponent,
    KurirComponent,
    KurirAkcijeComponent,
    UplataComponent,
    UplataAkcijeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }