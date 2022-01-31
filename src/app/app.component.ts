import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'uplata-pazara';
  proba: string = '';
  userDisplayName = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        const temp = JSON.stringify(event);
        const json_temp = JSON.parse(temp);
        console.log(json_temp.url);
        if (json_temp.url == '/prijava' || json_temp.url == '/') {
          this.proba = 'none';
        }
      });
  }

  logout(): void {
    this.router.navigate(['/prijava']);
    localStorage.removeItem('currentUser');
  }

}
