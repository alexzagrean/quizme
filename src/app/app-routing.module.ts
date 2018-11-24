import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'create',
    loadChildren: './question/quiz.module#QuizModule'
  },
  {
    path: 'events',
    loadChildren: './events/events.module#EventsModule'
  },
  {
    path: 'statistics',
    loadChildren: './statistics/statistics.module#StatisticsModule'
  },
  {
    path: 'quiz',
    loadChildren: './quiz/quiz.module#QuizModule'
  }
]
@NgModule({
  exports: [RouterModule,],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
