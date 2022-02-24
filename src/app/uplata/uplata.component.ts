import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { UplataService } from './services/uplata.service';
import { Uplata } from './uplata';

@Component({
  selector: 'app-uplata',
  templateUrl: './uplata.component.html',
  styleUrls: ['./uplata.component.scss']
})
export class UplataComponent implements OnInit {
  dataSource: any = [];
  displayedColumns: string[] = ['uplataId', 'kurirId', 'racunPrimaoca', 'nazivUplatioca',
    'gradUplatioca', 'adresaUplatioca', 'datumTransakcije', 'iznosUplate', 'iznosProvizije', 'ukupnaUplata',
    'datumUnosa', 'akcije'];

  constructor(private dataService: UplataService, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataService.getUplata().subscribe((data: Uplata) => {
      this.dataSource = data;
    });
  }

  delete(uplata: Uplata) {
    this.dataService.deleteUplata(uplata.uplataId).subscribe(res => {
      if (res != null) {
        this.dialog.open(DialogComponent, {
          width: '500px',
          data: { title: 'Greška', text: 'Dogodila se greška, uplata nije obrisana!', buttonText: 'OK' }
        });
      }
      this.dialog.open(DialogComponent, {
        width: '500px',
        data: { title: 'Brisanje uplate', text: 'Uspješno ste obrisali uplatu!', buttonText: 'OK' }
      });
    });
  }
}