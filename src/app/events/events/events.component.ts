import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NewComponent } from '../new/new.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EventsComponent implements OnInit {
  eventsForm: FormGroup;
  dialogOpened : boolean = false;
  public events: string[] = ['asdf', 'asdf']
  public quizzes: string[] = ['Mobile', 'Web', 'Algo', 'Embedded'];
  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.eventsForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
    });
  }
  openDialog() : void{
    this.dialogOpened = true;
    const dialogRef = this.dialog.open(NewComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.dialogOpened = false;
    });
  }
}
