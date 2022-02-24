import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Kurir } from './kurir';
import { KurirService } from './services/kurir.service';

@Component({
  selector: 'app-kurir',
  templateUrl: './kurir.component.html',
  styleUrls: ['./kurir.component.scss']
})
export class KurirComponent implements OnInit {
  dataSource: any = [];
  displayedColumns: string[] = ['kurirId', 'trgovacId', 'ime', 'prezime', 'jmbg',
    'datumAutorizacije', 'status', 'drzava', 'grad', 'adresa',
    'telefon', 'mail', 'datumUnosa', 'akcije'];

  constructor(private dataService: KurirService, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataService.getKurir().subscribe((data: Kurir) => {
      this.dataSource = data;
    });
  }

  delete(kurir: Kurir) {
    this.dataService.deleteKurir(kurir.kurirId).subscribe(res => {
      if (res != null) {
        this.dialog.open(DialogComponent, {
          width: '500px',
          data: { title: 'Greška', text: 'Dogodila se greška, trgovac nije obrisan!', buttonText: 'OK' }
        });
      }
      this.dialog.open(DialogComponent, {
        width: '500px',
        data: { title: 'Brisanje trgovca', text: 'Uspješno ste obrisali trgovca!', buttonText: 'OK' }
      });
    });
  }
}