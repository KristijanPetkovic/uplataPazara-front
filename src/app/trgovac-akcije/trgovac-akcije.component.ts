import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TrgovacService } from '../trgovac/services/trgovac.service';
import { Trgovac } from '../trgovac/trgovac';
import { formatDate } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-trgovac-akcije',
  templateUrl: './trgovac-akcije.component.html',
  styleUrls: ['./trgovac-akcije.component.scss']
})
export class TrgovacAkcijeComponent implements OnInit {

  public id: number | null = 0;
  result: any = [];
  /*nazivTrgovca: string = "";
  pib: string = "";
  drzava: string = "";
  grad: string = "";
  adresa: string = "";
  mb: string = "";
  brojRacuna: string = "";
  datumUnosa: Date = new Date();*/

  formdata = new FormGroup({
    trgovacId: new FormControl(),
    nazivTrgovca: new FormControl(),
    pib: new FormControl(),
    drzava: new FormControl(),
    grad: new FormControl(),
    adresa: new FormControl(),
    mb: new FormControl(),
    brojRacuna: new FormControl(),
    datumUnosa: new FormControl()
  });

  constructor(private dataService: TrgovacService, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.id) {
      this.dataService.getTrgovacById(this.id).subscribe((data: Trgovac) => {
        if (data) {
          this.formdata = new FormGroup({
            trgovacId: new FormControl(this.id),
            nazivTrgovca: new FormControl(data.nazivTrgovca),
            pib: new FormControl(data.pib),
            drzava: new FormControl(data.drzava),
            grad: new FormControl(data.grad),
            adresa: new FormControl(data.adresa),
            mb: new FormControl(data.mb),
            brojRacuna: new FormControl(data.brojRacuna),
            datumUnosa: new FormControl(data.datumUnosa)
          });
        }
      });
    } else {
      this.formdata = new FormGroup({
        nazivTrgovca: new FormControl(),
        pib: new FormControl(),
        drzava: new FormControl(),
        grad: new FormControl(),
        adresa: new FormControl(),
        mb: new FormControl(),
        brojRacuna: new FormControl(),
        datumUnosa: new FormControl(new Date())
      });
    }
  }

  snimi() {
    if (this.id) {
      this.dataService.editTrgovac(this.formdata, this.id).subscribe((data: Trgovac) => {
        if (data == null) {
          this.dialog.open(DialogComponent, {
            width: '500px',
            data: { title: 'Ažuriranje trgovca', text: 'Uspješno ste ažurirali trgovca!', buttonText: 'OK', buttonAction: 'trgovac' }
          });
        }
      });
    } else {
      this.dataService.addTrgovac(this.formdata).subscribe((data: Trgovac) => {
        if (data) {
          this.dialog.open(DialogComponent, {
            width: '500px',
            data: { title: 'Dodavanje trgovca', text: 'Uspješno ste dodali novog trgovca!', buttonText: 'OK', buttonAction: 'trgovac' }
          });
        }
      });
    }
  }
}