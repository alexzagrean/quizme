import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EventsComponent implements OnInit {
  eventsForm: FormGroup;
  public events: string[] = ['asdf', 'asdf']
  public quizzes: string[] = ['Mobile', 'Web', 'Algo', 'Embedded'];
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.eventsForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
    });
  }

}
