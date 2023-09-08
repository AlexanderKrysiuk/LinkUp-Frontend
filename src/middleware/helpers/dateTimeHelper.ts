export function isSameDay(
	selectedDate: string,
	currentDateTime: Date,
): boolean {
	const selectedDay: number = parseInt(selectedDate.slice(8, 10));
	const currentDay: number = currentDateTime.getDate();
	return selectedDay === currentDay;
}

export function validateDayTime(
	selectedTime: string,
	currentDateTime: Date,
	referenceDay: any,
): boolean {
	const [selectedHour, selectedMinutes] = selectedTime.split(':').map(Number);
	const [currentHour, currentMinutes] = currentDateTime
		.toTimeString()
		.slice(0, 5)
		.split(':')
		.map(Number);
	const currentDay: number = parseInt(
		currentDateTime.toISOString().slice(8, 10),
	);

	return referenceDay === currentDay &&
		new Date(0, 0, 0, selectedHour, selectedMinutes) <=
			new Date(0, 0, 0, currentHour, currentMinutes)
		? true
		: false;
}

export function calculateMinTime(
	selectedDate: string,
	currentDateTime: Date,
): string {
	return isSameDay(selectedDate, currentDateTime) == true
		? `${currentDateTime.toTimeString().slice(0, 5)}`
		: '00:00';
}

export function convertToUTCDateTime(date: string, time: string): string {
	const utcYear = parseInt(date.slice(0, 4));
	const utcMonth = parseInt(date.slice(5, 7)) - 1;
	const utcDay = parseInt(date.slice(8, 10));
	const utcHour = parseInt(time.slice(0, 2));
	const utcMinute = parseInt(time.slice(3, 5));
	const utcDate = new Date(
		Date.UTC(utcYear, utcMonth, utcDay, utcHour, utcMinute),
	);
	return utcDate.toISOString();
}
