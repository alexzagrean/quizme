import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PostQuestion} from '../../app/post-question'

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }
  getQuestions() : Observable<any>{
    return this.http.get<any>('http://18.197.19.50:8081/questions')
  }
  getAnswers() : Observable<any>{
    return this.http.get<any>('http://18.197.19.50:8081/answers')
  }
  postQuestion(){
    let d : PostQuestion = new PostQuestion('null','null','null')
    return this.http.post<any>('http://18.197.19.50:8081/questions/add',d)
  }
}
