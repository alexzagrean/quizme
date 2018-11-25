import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostEvent } from '../post-event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient,  private router: Router,) { }
  login(name): Observable<any> {
    let data : PostEvent = new PostEvent(name,'1',1,1,1,1,1,1);
    console.log(data);
    return this.http.post<any>('http://18.197.19.50:8081/events/add',data)
  }
}
