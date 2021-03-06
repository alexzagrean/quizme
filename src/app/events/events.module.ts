import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events/events.component';
import { SharedModule } from '../shared/shared.module';
import { NewComponent } from './new/new.component';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule
  ],
  entryComponents: [
    NewComponent
  ],
  declarations: [EventsComponent, NewComponent]
})
export class EventsModule { }
