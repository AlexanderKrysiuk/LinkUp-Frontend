const CURRENT_YEAR = new Date().getFullYear();
const CURRENT_MONTH = new Date().getMonth();
const NUMBER_OF_MONTHS = 12;

const getDaysInMonth = (year: number, month: number) =>
	new Date(year, month + 1, 0).getDate();
const getDaysInPrevMonth = (year: number, month: number) =>
	new Date(year, month, 0).getDate();
const getDayOfWeek = (date: Date) => date.getDay();

const convertMonth = (month: number) => {
	const requestedMonth =
		month === CURRENT_MONTH ? month : (month - 1) % NUMBER_OF_MONTHS;
	return requestedMonth;
};

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
	const requestedMonth = convertMonth(month);
	return new Date(2022, requestedMonth, 1).toLocaleString(
		navigator.language,
		{
			month: 'long',
		},
	);
};
