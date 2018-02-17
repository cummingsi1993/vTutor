import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router } from '@angular/router'
import { ORIGIN_URL } from './constants/baseurl.constants';
import { Http } from '@angular/http';
import { TransferHttp } from '../../modules/transfer-http/transfer-http';
import { CookieService } from 'ngx-cookie';

const VTUTOR_TOKEN = 'vtutor_login_token';

@Injectable()
export class LoginService {

	public Role: string;
	private IdentityCookie: string;

	constructor(
		@Inject(ORIGIN_URL) private baseUrl: string,
		@Inject(PLATFORM_ID) private platformId: Object,
		private http: Http,
		private transferHttp: TransferHttp,
		private router: Router,
		private cookies: CookieService) {

		
	}

	Logout() {
		this.IdentityCookie = null;
		this.cookies.remove(VTUTOR_TOKEN);
	}

	Login(username: string, password: string) {
		this.http.post(`account/login?email=${username}&password=${password}`, {}).subscribe(result => {
			this.Role = result.json()[0];
			//store the role ...
			this.cookies.put(VTUTOR_TOKEN, this.Role);

			if (this.Role == 'Tutors') {
				this.router.navigate(['dashboard']);
			}
			else if (this.Role == 'Students') {
				this.router.navigate([''])
			}
			else if (this.Role == 'Admin') {
				this.router.navigate(['admin-dashboard']);
			}
		})
	}

	public IsLoggedIn() {
		if (isPlatformBrowser(this.platformId)) {
			this.IdentityCookie = this.cookies.get(VTUTOR_TOKEN);
		}

		return this.IdentityCookie != null;
	}


	RegisterTutor(username: string, password: string) {
		this.http.post(`account/register?email=${username}&password=${password}&registrationType=Tutors`, {}).subscribe(result => {
			
		})
	}

	private GetRoles() {
		this.transferHttp.get(`${this.baseUrl}/account/roles`).subscribe(result => {
			this.Role = result.json()[0];
		})
	}


}
