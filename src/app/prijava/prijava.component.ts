import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PrijavaService } from './services/prijava.service';

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.scss']
})

export class PrijavaComponent implements OnInit {
  @Input() error: string | null | undefined;
  @Input() success: string | null | undefined;

  korisnickoIme: string = "";
  lozinka: string = "";
  formdata: any;
  korisnik: any = [];
  hide = true;

  constructor(private prijavaService: PrijavaService, private router: Router,) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      korisnickoIme: new FormControl("test"),
      lozinka: new FormControl("test")
    });
  }

  login() {
    this.prijavaService.getKorisnik().subscribe(res => {
      this.korisnik = res.find((element: { korisnickoIme: any; lozinka: any; }) => element.korisnickoIme == this.formdata.value.korisnickoIme && element.lozinka == this.formdata.value.lozinka);
      if (this.korisnik) {
        localStorage.setItem('currentUser', this.formdata.value.korisnickoIme);
        this.router.navigate(['/pocetna'])
          .then(() => {
            window.location.reload();
          });
      } else {
        this.error = "Pogrešno korisničko ime ili lozinka!";
      }
    });
  }

  register() {
    this.prijavaService.getKorisnik().subscribe(res => {
      console.log(res);

      this.korisnik = res.find((element: { korisnickoIme: string; }) => element.korisnickoIme == this.formdata.value.korisnickoIme);
      console.log(this.korisnik);
      if (this.korisnik == undefined) {
        this.prijavaService.addKorisnik(this.formdata).subscribe();
        this.error = "";
        this.success = "Uspješno ste se registrovali, bices prijavljen polako!";
        setTimeout(() => {
          this.router.navigate(['/pocetna']);
        }, 3000);
      } else {
        this.error = "Korsničko ime je zauzeto!";
      }
    });
  }
}

