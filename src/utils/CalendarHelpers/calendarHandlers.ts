import { CURRENT_MONTH } from './calendarConstants';

type HandleMonthParams = {
	prevDate: Date;
	setDate: (date: Date) => void;
};

export const handlePreviousMonth = ({
	prevDate,
	setDate,
}: HandleMonthParams) => {
	const dayToSet =
		prevDate.getMonth() === CURRENT_MONTH ? prevDate.getDate() : 1;
	const newDate = new Date(
		prevDate.getFullYear(),
		prevDate.getMonth() - 1,
		dayToSet,
	);
	setDate(newDate);
};

export const handleNextMonth = ({ prevDate, setDate }: HandleMonthParams) => {
	const dayToSet =
		prevDate.getMonth() === CURRENT_MONTH ? prevDate.getDate() : 1;
	const newDate = new Date(
		prevDate.getFullYear(),
		prevDate.getMonth() + 1,
		dayToSet,
	);
	setDate(newDate);
};
