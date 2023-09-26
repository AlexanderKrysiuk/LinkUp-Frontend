import React from 'react';

type CalendarMonthButtonComponentProps = {
	arrow: string;
	direction: 'previous' | 'next';
};

const CalendarMonthButtonComponent = ({
	arrow,
	direction,
}: CalendarMonthButtonComponentProps) => {
	return <button className={direction + 'month'}>{arrow}</button>;
};

export default CalendarMonthButtonComponent;
