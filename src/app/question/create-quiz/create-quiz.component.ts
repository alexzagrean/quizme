import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Question } from 'src/app/question';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateQuizComponent implements OnInit {
  public questions: Question[] = [new Question('Single Choice',[''],'')];
  public types : string[] = ['Single Choice', 'Multiple Choices', 'Text Answer']
  public isOpen : boolean = false;
  constructor() { }

  ngOnInit() {
    // this.questions.push(new Question([]))
    // this.questions[0].choices.push('');
  }
  addChoice(event, questionIndex, choiceIndex) {
    if (event.keyCode == 9 && this.questions[questionIndex].choices[choiceIndex] != '') {
      this.questions[questionIndex].choices.push(null);
    }
  }
  public open(){
    this.isOpen = !this.isOpen;
  }
  addQuestion(index : number) {
    this.isOpen = false;
    this.questions.push(new Question(this.types[index],[''],''))
    console.log(this.questions);
  }
  trackByFn(index, item) {
    return index;
  }
}
