import React from 'react';

type CalendarFieldComponentProps = {
	dayNumber: number;
	today: boolean;
};

const CalendarFieldComponent = ({
	dayNumber,
	today,
}: CalendarFieldComponentProps) => {
	return (
		<div className={`calendar__field ${today ? 'today' : null}`}>
			{dayNumber}
		</div>
	);
};

export default CalendarFieldComponent;
