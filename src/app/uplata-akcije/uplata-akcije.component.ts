import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { KurirService } from '../kurir/services/kurir.service';
import { UplataService } from '../uplata/services/uplata.service';
import { Uplata } from '../uplata/uplata';

@Component({
  selector: 'app-uplata-akcije',
  templateUrl: './uplata-akcije.component.html',
  styleUrls: ['./uplata-akcije.component.scss']
})
export class UplataAkcijeComponent implements OnInit {

  public id: number | null = 0;
  result: any = [];
  kuriri: any = [];
  uplataId: string = "";
  kurirId: string = "";
  racunPrimaoca: string = "";
  nazivUplatioca: string = "";
  gradUplatioca: string = "";
  adresaUplatioca: string = "";
  datumTransakcije: Date = new Date();
  iznosUplate: number | undefined;
  iznosProvizije: number | undefined;
  ukupnaUplata: number | undefined;
  datumUnosa: Date = new Date();

  formdata = new FormGroup({
    uplataId: new FormControl(),
    kurirId: new FormControl(),
    racunPrimaoca: new FormControl(),
    nazivUplatioca: new FormControl(),
    gradUplatioca: new FormControl(),
    adresaUplatioca: new FormControl(),
    datumTransakcije: new FormControl(),
    iznosUplate: new FormControl(),
    iznosProvizije: new FormControl(),
    ukupnaUplata: new FormControl(),
    datumUnosa: new FormControl()
  });

  constructor(private dataService: UplataService, private kurirService: KurirService, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);

    this.kurirService.getKurir().subscribe(res => this.kuriri = res);

    if (this.id) {
      this.dataService.getUplataById(this.id).subscribe((data: Uplata) => {
        if (data) {
          console.log('data je', data);
          this.formdata = new FormGroup({
            uplataId: new FormControl(this.id),
            kurirId: new FormControl(data.kurirId),
            racunPrimaoca: new FormControl(data.racunPrimaoca),
            nazivUplatioca: new FormControl(data.nazivUplatioca),
            gradUplatioca: new FormControl(data.gradUplatioca),
            adresaUplatioca: new FormControl(data.adresaUplatioca),
            datumTransakcije: new FormControl(data.datumTransakcije),
            iznosUplate: new FormControl(data.iznosUplate),
            iznosProvizije: new FormControl(data.iznosProvizije),
            ukupnaUplata: new FormControl(data.ukupnaUplata),
            datumUnosa: new FormControl(data.datumUnosa)
          });
        }
      });
    } else {
      this.formdata = new FormGroup({
        kurirId: new FormControl(),
        racunPrimaoca: new FormControl(),
        nazivUplatioca: new FormControl(),
        gradUplatioca: new FormControl(),
        adresaUplatioca: new FormControl(),
        datumTransakcije: new FormControl(new Date()),
        iznosUplate: new FormControl(),
        iznosProvizije: new FormControl(40),
        ukupnaUplata: new FormControl(),
        datumUnosa: new FormControl(new Date())
      });
    }
  }
  snimi() {
    if (this.id) {
      this.dataService.editUplata(this.formdata, this.id).subscribe((data: Uplata) => {
        console.log(data);
        if (data == null) {
          this.dialog.open(DialogComponent, {
            width: '500px',
            data: { title: 'Ažuriranje uplate', text: 'Uspješno ste ažurirali uplatu!', buttonText: 'OK', buttonAction: 'uplata' }
          });
        }
      });
    } else {
      this.dataService.addUplata(this.formdata).subscribe((data: Uplata) => {
        console.log(data);
        if (data) {
          this.dialog.open(DialogComponent, {
            width: '500px',
            data: { title: 'Dodavanje uplate', text: 'Uspješno ste dodali novu uplatu!', buttonText: 'OK', buttonAction: 'uplata' }
          });
        }
      });
    }
  }

  izracunaj() {
    if (this.formdata.value.iznosUplate) {
      this.formdata.controls.ukupnaUplata.setValue(Number(this.formdata.value.iznosUplate) + Number(this.formdata.value.iznosProvizije));
    }
  }
}

