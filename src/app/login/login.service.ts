import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,  private router: Router,
		) { }

	login(email: string, password: string) {
			return this.http.post<any>('/user/login', { email, password })
					.pipe(map(user => {
							if (user && user.authorizationToken) {
									localStorage.setItem('currentUser', JSON.stringify(user));
							}
							return user;
					}));
	}
	logout() {
			localStorage.removeItem('currentUser');
			return 	this.router.navigate(['/login']);

	}
	resetPassword(email : string){
		return this.http.patch<any>('/user/password', { email });
	}
}
