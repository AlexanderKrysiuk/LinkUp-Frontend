import React from 'react';
import './TimeSlot.css';

interface TimeSlotProps {
	date: string;
	time: string;
	place: string;
	title: string;
}

const TimeSlot: React.FC<TimeSlotProps> = ({
	date,
	time,
	place,
	title,
}: TimeSlotProps) => {
	return (
		<div className='time-slot'>
			<h4 className='time-slot__header'>{title}</h4>
			<p className='time-slot__prop'>
				Date and Time: {date}, {time}
			</p>
			<p className='time-slot__prop'>Place: {place}</p>
		</div>
	);
};

export default TimeSlot;
