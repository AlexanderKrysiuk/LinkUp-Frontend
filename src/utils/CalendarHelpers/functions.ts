import {
	CURRENT_MONTH,
	MONTH_NUMBER_LIST,
	NUMBER_OF_MONTHS,
} from './constants';

export const getDaysInMonth = (year: number, month: number) =>
	new Date(year, month + 1, 0).getDate();
export const getDaysInPrevMonth = (year: number, month: number) =>
	new Date(year, month, 0).getDate();
export const getDayOfWeek = (date: Date) => date.getDay();

export const convertMonth = (month: number = CURRENT_MONTH) => {
	const requestedMonth =
		month === undefined
			? CURRENT_MONTH
			: (MONTH_NUMBER_LIST[(month - 1) % NUMBER_OF_MONTHS] as number);
	return requestedMonth;
};

export const populateMonthList: () => number[] = (): number[] => {
	const monthList = Array.from({ length: NUMBER_OF_MONTHS }, (_, i) => i);
	return monthList;
};
