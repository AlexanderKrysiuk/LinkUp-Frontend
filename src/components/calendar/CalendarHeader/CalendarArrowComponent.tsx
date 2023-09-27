import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	handleNextMonth,
	handlePreviousMonth,
} from '@utils/CalendarHelpers/calendarHandlers.ts';
import React, { Dispatch, SetStateAction } from 'react';

type CalendarArrowComponentProps = {
	arrow: IconDefinition;
	direction: 'previous' | 'next';
	prevDate: Date;
	setDate: Dispatch<SetStateAction<Date>>;
};

const CalendarArrowComponent = ({
	arrow,
	direction,
	prevDate,
	setDate,
}: CalendarArrowComponentProps) => {
	return (
		<FontAwesomeIcon
			icon={arrow}
			className={direction + 'month'}
			onClick={() =>
				direction === 'previous'
					? handlePreviousMonth({ prevDate, setDate })
					: handleNextMonth({ prevDate, setDate })
			}
		/>
	);
};

export default CalendarArrowComponent;
