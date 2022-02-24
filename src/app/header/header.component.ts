import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public show: boolean = true;
  userDisplayName: string | null = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.userDisplayName = localStorage.getItem('currentUser');
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        const temp = JSON.stringify(event);
        const json_temp = JSON.parse(temp);
        if (json_temp.url == '/prijava' || json_temp.url == '/') {
          this.show = false;
        }
      });
  }

  logout(): void {
    this.router.navigate(['/prijava']);
    localStorage.removeItem('currentUser');
  }

  pocetna(): void {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['/pocetna']);
    }
  }
}