import { Injectable } from '@angular/core';

import { Tutor } from '../models/Tutor';
import { Http } from '@angular/http';


export class TutorInterestEmail{
	name: string;
	emailAddress: string;
	grade: string;
	subject: string;
	whyVTutor: string;

}

@Injectable()
export class TutorsService {

	constructor(private http: Http) {

	}


	public SendInterestEmail(tutor:TutorInterestEmail) {
		return this.http.post('api/emails/tutor-interest', tutor);
	}

	public SaveTutor(tutor: Tutor) {

		return this.http.post('api/tutors', tutor)
			
	}




}
