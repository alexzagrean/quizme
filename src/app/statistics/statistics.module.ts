import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    ChartsModule
  ],
  declarations: [StatisticsComponent]
})
export class StatisticsModule { }
