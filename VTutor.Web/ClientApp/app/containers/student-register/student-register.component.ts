import { Component } from '@angular/core';
import { StudentsService } from '../../shared/students.service';
import { Student } from '../../models/Student';
import { LoginService } from '../../shared/login.service';

@Component({
    selector: 'vt-student-register',
    templateUrl: './student-register.component.html',
    styleUrls: ['student-register.component.scss']
})
export class StudentRegisterComponent {

	public student: Student;
	public password: string;
	public confirmPassword: string;

	constructor(private studentsService: StudentsService, private loginService: LoginService) {
		this.student = new Student();
	}

	public submit() {
		this.studentsService.SaveStudent(this.student).subscribe(x => {
			this.loginService.RegisterStudent(this.student.email, this.password);
		});
	}
}
