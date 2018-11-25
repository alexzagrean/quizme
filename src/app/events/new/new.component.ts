import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  eventForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<NewComponent>,
    private formBuilder: FormBuilder,
    private eventsService : EventsService
    ) { }

  ngOnInit() {
    this.eventForm = this.formBuilder.group({
      name: ['', Validators.required]
  });
  }
  onClick(){
    this.eventsService.login(this.eventForm.value.name).subscribe((el)=>{
      console.log(el);
    })
    this.dialogRef.close();

  }
}
