import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { QuizRoutingModule } from './quiz-routing.module';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    QuizRoutingModule,
    SharedModule
  ],
  declarations: [CreateQuizComponent]
})
export class QuizModule { }
