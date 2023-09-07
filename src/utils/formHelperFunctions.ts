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

export function convertToDateTime(date: string, time: string): string {
	const dateTime: Date = new Date(date + 'T' + time + ':00');
	const utcDate = new Date(
		dateTime.getUTCFullYear(),
		dateTime.getUTCMonth(),
		dateTime.getUTCDate(),
		dateTime.getUTCHours(),
		dateTime.getUTCMinutes(),
		dateTime.getUTCSeconds(),
	);
	return utcDate.toISOString();
}
