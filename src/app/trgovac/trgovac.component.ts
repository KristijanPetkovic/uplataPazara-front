import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TrgovacService } from './services/trgovac.service';
import { Trgovac } from './trgovac';

@Component({
  selector: 'app-trgovac',
  templateUrl: './trgovac.component.html',
  styleUrls: ['./trgovac.component.scss']
})
export class TrgovacComponent implements OnInit {
  dataSource: any = [];
  displayedColumns: string[] = ['trgovacId', 'nazivTrgovca', 'drzava', 'adresa', 'grad', 'pib', 'mb', 'brojRacuna', 'datumUnosa', 'akcije'];

  constructor(private dataService: TrgovacService, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataService.getTrgovac().subscribe((data: Trgovac) => {
      console.log(data);
      this.dataSource = data;
    });
  }

  delete(trgovac: Trgovac) {
    console.log("radi" + trgovac.trgovacId);
    this.dataService.deleteTrgovac(trgovac.trgovacId).subscribe(res => {
      console.log(res);

      const dialogRef = this.dialog.open(TrgovacComponent, {
        width: '250px',
      });

    });
  }
}
