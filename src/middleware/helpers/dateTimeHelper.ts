/**
 * @module formHelperFunctions
 * @description Module containing utility functions for form validation.
 */

/**
 * Checks if the selected date is the same as the current day.
 *
 * @param {string} selectedDate - The selected date in string format (YYYY-MM-DD).
 * @param {Date} currentDateTime - The current date and time as a JavaScript Date object.
 * @returns {boolean} - Returns true if the selected date is the same as the current day, otherwise false.
 */
export function isSameDay(
	selectedDate: string,
	currentDateTime: Date,
): boolean {
	const selectedDay: number = parseInt(selectedDate.slice(8, 10));
	const currentDay: number = currentDateTime.getDate();
	return selectedDay === currentDay;
}

/**
 * Validates if the selected time is not earlier than the current time on the same day.
 *
 * @param {string} selectedTime - The selected time in string format (HH:MM).
 * @param {Date} currentDateTime - The current date and time as a JavaScript Date object.
 * @param {number} referenceDay - The reference day (day of the month) for comparison.
 * @returns {boolean} - Returns true if the selected time is valid, otherwise false.
 */
export function validateDayTime(
	selectedTime: string,
	currentDateTime: Date,
	referenceDay: number,
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

	return (
		referenceDay === currentDay &&
		new Date(0, 0, 0, selectedHour, selectedMinutes) <=
			new Date(0, 0, 0, currentHour, currentMinutes)
	);
}

/**
 * Calculates the minimum valid time for the selected date.
 *
 * @param {string} selectedDate - The selected date in string format (YYYY-MM-DD).
 * @param {Date} currentDateTime - The current date and time as a JavaScript Date object.
 * @returns {string} - The minimum valid time in string format (HH:MM).
 */
export function calculateMinTime(
	selectedDate: string,
	currentDateTime: Date,
): string {
	return isSameDay(selectedDate, currentDateTime)
		? `${currentDateTime.toTimeString().slice(0, 5)}`
		: '00:00';
}

export function convertToDateTime(date: string, time: string): string {
	const meetingDate = new Date();

	const year = parseInt(date.slice(0, 4));
	const month = parseInt(date.slice(5, 7)) - 1;
	const day = parseInt(date.slice(8, 10));
	const hour = parseInt(time.slice(0, 2));
	const minute = parseInt(time.slice(3, 5));

	meetingDate.setFullYear(year, month, day);
	meetingDate.setHours(hour, minute);

	return meetingDate.toISOString();
}
