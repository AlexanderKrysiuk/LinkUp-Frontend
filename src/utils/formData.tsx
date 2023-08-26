export type RegistrationData = {
	userType: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmedPassword: string;
};

export type LoginData = {
	email: string;
	password: string;
};

export interface TimeSlotData {
	date: string;
	time: string;
	place: string;
	title: string;
}
