import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  navigate(index : number){
    if(index == 1)
    this.router.navigateByUrl('/create');
    if(index == 2)
    this.router.navigateByUrl('/events');
  }
}
