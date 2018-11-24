import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events/events.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule
  ],
  declarations: [EventsComponent]
})
export class EventsModule { }
