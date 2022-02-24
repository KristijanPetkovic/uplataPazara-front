import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public router: Router
  ) { }

  onOkClick(): void {
    this.dialogRef.close();
    if (this.data.buttonAction) {
      this.router.navigate(['/' + this.data.buttonAction]);
    } else { 
      window.location.reload();
    }
   
  }
  ngOnInit() { }
}