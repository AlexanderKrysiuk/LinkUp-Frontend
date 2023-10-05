import { CURRENT_MONTH } from './calendarConstants.ts';

export const getDaysInMonth = (year: number, month: number) =>
	new Date(year, month + 1, 0).getDate();

export const getDaysInPrevMonth = (year: number, month: number) =>
	new Date(year, month, 0).getDate();

export const getDayOfWeek = (date: Date) => (date.getDay() + 6) % 7;

export const getLocaleDayNames = () =>
	new Array(7).fill(0).map((_, index) => {
		const dayIndex = (index + 3) % 7;
		return new Date(2022, 0, dayIndex).toLocaleString(navigator.language, {
			weekday: 'short',
		});
	});

export const getLocaleMonthName = (month: number = CURRENT_MONTH) => {
	const requestedMonth: number = month;
	return new Date(2022, requestedMonth, 1).toLocaleString(
		navigator.language,
		{
			month: 'long',
		},
	);
};
