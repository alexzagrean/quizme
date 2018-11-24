import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  public questions: Question[] = [new Question('Single Choice',[''],'')];

  constructor() { }

  ngOnInit() {
  }

}
