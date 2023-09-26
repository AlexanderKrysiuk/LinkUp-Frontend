import { CURRENT_MONTH, CURRENT_YEAR } from './CalendarHelpers/constants';
import {
	convertMonth,
	getDayOfWeek,
	getDaysInMonth,
	getDaysInPrevMonth,
} from './CalendarHelpers/functions';

export const calculateDaysToFill = (
	year: number = CURRENT_YEAR,
	month: number = CURRENT_MONTH,
) => {
	const requestedMonth = convertMonth(month);

	const firstDayOfMonth = new Date(year, requestedMonth, 1);
	const lastDayOfMonth = new Date(year, requestedMonth + 1, 0);

	const firstDayOfWeek = getDayOfWeek(firstDayOfMonth);
	const lastDayOfWeek = getDayOfWeek(lastDayOfMonth);

	const daysInMonth = getDaysInMonth(year, requestedMonth);
	const prevMonthDays =
		getDaysInPrevMonth(year, requestedMonth) - firstDayOfWeek + 2;
	const nextMonthDays = 7 - lastDayOfWeek;

	const daysFromPrevMonth = Array.from(
		{ length: firstDayOfWeek - 1 },
		(_, i) => prevMonthDays + i,
	);
	const daysFromCurrentMonth = Array.from(
		{ length: daysInMonth },
		(_, i) => i + 1,
	);
	const daysFromNextMonth = Array.from(
		{ length: nextMonthDays },
		(_, i) => i + 1,
	);

	return [
		...daysFromPrevMonth,
		...daysFromCurrentMonth,
		...daysFromNextMonth,
	];
};

export const getLocaleDayNames = () =>
	new Array(7).fill(0).map((_, index) => {
		const dayIndex = (index + 3) % 7;
		return new Date(2022, 0, dayIndex).toLocaleString(navigator.language, {
			weekday: 'short',
		});
	});

export const getLocaleMonthName = (month: number = CURRENT_MONTH) => {
	const requestedMonth: number = convertMonth(month);
	return new Date(2022, requestedMonth, 1).toLocaleString(
		navigator.language,
		{
			month: 'long',
		},
	);
};
