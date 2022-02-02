import { Component, OnInit } from '@angular/core';
import { TrgovacService } from './services/trgovac.service';
import { Trgovac } from './trgovac';

@Component({
  selector: 'app-trgovac',
  templateUrl: './trgovac.component.html',
  styleUrls: ['./trgovac.component.scss']
})
export class TrgovacComponent implements OnInit {
  products: any = [];

  constructor(private dataService: TrgovacService) { }

  ngOnInit() {
    this.dataService.getTrgovac().subscribe((data: Trgovac) => {
      console.log(data);
      this.products = data;
    })
  }

}
