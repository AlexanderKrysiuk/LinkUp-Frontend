import React from 'react';

type CalendarFieldComponentProps = {
	dayNumber: number;
};

const CalendarFieldComponent = ({ dayNumber }: CalendarFieldComponentProps) => {
	return <div className='calendar__field'>{dayNumber}</div>;
};

export default CalendarFieldComponent;
