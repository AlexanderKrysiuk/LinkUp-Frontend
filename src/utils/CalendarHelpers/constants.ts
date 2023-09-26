import { populateMonthList } from './functions';

export const CURRENT_YEAR: number = new Date().getFullYear();
export const CURRENT_MONTH: number = new Date().getMonth();
export const NUMBER_OF_MONTHS: number = 12;
export const MONTH_NUMBER_LIST: number[] = populateMonthList();
