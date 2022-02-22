import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { Kurir } from '../kurir/kurir';
import { KurirService } from '../kurir/services/kurir.service';
import { TrgovacService } from '../trgovac/services/trgovac.service';
import { Trgovac } from '../trgovac/trgovac';

@Component({
  selector: 'app-kurir-akcije',
  templateUrl: './kurir-akcije.component.html',
  styleUrls: ['./kurir-akcije.component.scss']
})
export class KurirAkcijeComponent implements OnInit {

  public id: number | null = 0;
  result: any = [];
  trgovci: Trgovac | undefined ;
  kurirId: string = "";
  trgovacId: string = "";
  ime: string = "";
  prezime: string = "";
  jmbg: string = "";
  datumAutorizacije: Date = new Date();
  status: string = "";
  drzava: string = "";
  grad: string = "";
  adresa: string = "";
  telefon: string = "";
  mail: string = "";
  datumUnosa: Date = new Date();

  formdata = new FormGroup({
    kurirId: new FormControl(),
    trgovacId: new FormControl(),
    ime: new FormControl(),
    prezime: new FormControl(),
    jmbg: new FormControl(),
    datumAutorizacije: new FormControl(),
    status: new FormControl(),
    drzava: new FormControl(),
    grad: new FormControl(),
    adresa: new FormControl(),
    telefon: new FormControl(),
    mail: new FormControl(),
    datumUnosa: new FormControl()
  });

  constructor(private dataService: KurirService,private trgovacService: TrgovacService, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);

    //this.trgovci=this.trgovacService.getTrgovac().pipe(map(trgovac: Trgovac) => trgovac.trgovacId as Kurir);


    if (this.id) {
      this.dataService.getKurirById(this.id).subscribe((data: Kurir) => {
        if (data) {
          this.formdata = new FormGroup({
            kurirId: new FormControl(this.id),
            trgovacId: new FormControl(data.trgovacId),
            ime: new FormControl(data.ime),
            prezime: new FormControl(data.prezime),
            jmbg: new FormControl(data.jmbg),
            datumAutorizacije: new FormControl(data.datumAutorizacije),
            status: new FormControl(data.status),
            drzava: new FormControl(data.drzava),
            grad: new FormControl(data.grad),
            adresa: new FormControl(data.adresa),
            telefon: new FormControl(data.telefon),
            mail: new FormControl(data.mail),
            datumUnosa: new FormControl(data.datumUnosa)
          });
        }
      });
    } else {
      this.formdata = new FormGroup({
        trgovacId: new FormControl(),
        ime: new FormControl(),
        prezime: new FormControl(),
        jmbg: new FormControl(),
        datumAutorizacije: new FormControl(new Date()),
        status: new FormControl(),
        drzava: new FormControl(),
        grad: new FormControl(),
        adresa: new FormControl(),
        telefon: new FormControl(),
        mail: new FormControl(),
        datumUnosa: new FormControl(new Date())
      });
    }
  }
  snimi() {
    if (this.id) {
      this.dataService.editKurir(this.formdata, this.id).subscribe((data: Kurir) => {
        console.log(data);
        if (data == null) {
          this.dialog.open(DialogComponent, {
            width: '500px',
            data: { title: 'Ažuriranje kurira', text: 'Uspješno ste ažurirali kurira!', buttonText: 'OK', buttonAction: 'kurir' }
          });
        }
      });
    } else {
      this.dataService.addKurir(this.formdata).subscribe((data: Kurir) => {
        console.log(data);
        if (data) {
          this.dialog.open(DialogComponent, {
            width: '500px',
            data: { title: 'Dodavanje kurira', text: 'Uspješno ste dodali novog kurira!', buttonText: 'OK', buttonAction: 'kurir' }
          });
        }
      });
    }
  }
}
