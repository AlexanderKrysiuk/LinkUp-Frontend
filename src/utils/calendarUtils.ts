import {
	CURRENT_MONTH,
	CURRENT_YEAR,
} from './CalendarHelpers/calendarConstants';

import {
	getDayOfWeek,
	getDaysInMonth,
	getDaysInPrevMonth,
} from './CalendarHelpers/calendarFunctions';

export const calculateDaysToFill = (
	year: number = CURRENT_YEAR,
	month: number = CURRENT_MONTH,
) => {
	const firstDayOfMonth = new Date(year, month, 1);
	const lastDayOfMonth = new Date(year, month + 1, 0);

	const firstDayOfWeek = getDayOfWeek(firstDayOfMonth) + 1;
	const lastDayOfWeek = getDayOfWeek(lastDayOfMonth);

	const daysInMonth = getDaysInMonth(year, month);
	const prevMonthDays =
		firstDayOfWeek === 0
			? 0
			: getDaysInPrevMonth(year, month) - firstDayOfWeek + 1;
	let nextMonthDays = lastDayOfWeek === 6 ? 0 : 6 - lastDayOfWeek;

	if (daysInMonth + firstDayOfWeek + nextMonthDays <= 35) {
		nextMonthDays += 14;
	} else if (daysInMonth + firstDayOfWeek + nextMonthDays <= 42) {
		nextMonthDays += 7;
	}

	const daysArray: Date[] = [];

	// Days from the previous month
	for (let i = 0; i < (firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1); i++) {
		const day = new Date(year, month - 1, prevMonthDays + i + 1, 12);
		daysArray.push(day);
	}

	// Days from the current month
	for (let i = 0; i < daysInMonth; i++) {
		const day = new Date(year, month, i + 1, 12);
		daysArray.push(day);
	}

	// Days from the next month
	for (let i = 0; i < nextMonthDays; i++) {
		const day = new Date(year, month + 1, i + 1, 12);
		daysArray.push(day);
	}
	return daysArray;
};
