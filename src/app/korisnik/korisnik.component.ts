import { Component, OnInit } from '@angular/core';
import { Korisnik } from './korisnik';
import { KorisnikService } from './services/korisnik.service';

@Component({
  selector: 'app-korisnik',
  templateUrl: './korisnik.component.html',
  styleUrls: ['./korisnik.component.scss']
})
export class KorisnikComponent implements OnInit {
  products: Korisnik | undefined;

  constructor(private dataService: KorisnikService) { }

  ngOnInit() {
    this.dataService.getKorisniks().subscribe((data: Korisnik) => {
      this.products = data;
    })
  }
}