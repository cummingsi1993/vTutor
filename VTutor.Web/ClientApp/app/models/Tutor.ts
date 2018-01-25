export class Tutor {
	id: string;
	name: string;
	email: string;
	subjects: TutorSubject[];
}

export class TutorSubject {
	Name: Subject;
	SubjectGrade: SubjectGrade;
}

export class SubjectGrade {
	Name: Grade;
}

export enum Grade {
	Sixth = 6,
	Seventh = 7,
	Eighth = 8,
	Ninth = 9,
	Tenth = 10,
	Eleventh = 11,
	Twelfth = 12
}


export enum Subject {
	Math = "Math",
	English = "English",
	Spanish = "Spanish",
	French = "French",
	Statistics = "Statistics",
	Calculus = "Calculus",
	Trigonometry = "Trigonometry",
	Geometry = "Geometry",
	Algebra = "Algebra",
	Algebra2 = "Algebra 2"
}
