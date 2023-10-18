import React, { useEffect, useState } from 'react';

import './CalendarComponent.css';

import { calculateDaysToFill } from '@utils/calendarUtils';

import CalendarFieldComponent from './CalendarField/CalendarFieldComponent';

import CalendarDayNamesComponent from './CalendarHeader/CalendarDayNamesComponent.tsx';

import { getMeetings } from '@middleware/meetingsHandler.ts';

import CalendarHeaderComponent from './CalendarHeader/CalendarHeaderComponent.tsx';

type Meeting = {
	id: string;
	dateTime: string;
	maxParticipants: number;
	duration: number;
	description: string;
};

const CalendarComponent = () => {
	const [selectedDate, setSelectedDate] = useState<Date>(new Date());
	const [dateDays, setDateDays] = useState<Date[]>([]);
	const [meetingsByDate, setMeetingsByDate] = useState<
		Record<string, Meeting[]>
	>({});

	const selectedYear = selectedDate.getFullYear();
	const selectedMonth = selectedDate.getMonth();

	const updateDateDays = () => {
		const days = calculateDaysToFill(selectedYear, selectedMonth);
		setDateDays(days);
	};

	const isCurrentDay = (dayToCheck: Date) => {
		const today = new Date();
		return (
			dayToCheck.getFullYear() === today.getFullYear() &&
			dayToCheck.getMonth() === today.getMonth() &&
			dayToCheck.getDate() === today.getDate()
		);
	};

	const convertToLocaleTimezone = (date: string) => {
		const meetingDate = new Date(date);
		const localeOffset = new Date().getTimezoneOffset();
		const meetingOffset = meetingDate.getTimezoneOffset();
		if (localeOffset !== meetingOffset) {
			const offsetHours =
				meetingDate.getHours() +
				((meetingOffset - localeOffset) * -1) / 60;
			meetingDate.setHours(offsetHours);
		}
		return meetingDate;
	};

	useEffect(() => {
		updateDateDays();

		const token = localStorage.getItem('token');
		if (token) {
			getMeetings(token).then((res: Meeting[]) => {
				const meetingsMapping: Record<string, Meeting[]> = {};
				res.forEach((meeting: Meeting) => {
					const offsetMeeting = convertToLocaleTimezone(
						meeting.dateTime,
					);
					const dateParts = offsetMeeting.toISOString().split('T');
					const dateKey = (
						dateParts.length > 0 ? dateParts[0] : 'invalid-date'
					) as string;
					if (!(dateKey in meetingsMapping)) {
						meetingsMapping[dateKey] = [];
					}
					(meetingsMapping[dateKey] as Meeting[]).push(meeting);
				});

				setMeetingsByDate(meetingsMapping);
			});
		} else {
			throw new Error('Missing token - no user');
		}
	}, [selectedDate]);
	return (
		<div className='calendar'>
			<div className='calendar__header'>
				<CalendarHeaderComponent
					prevDate={selectedDate}
					setDate={setSelectedDate}
				/>
				<div className='calendar__header-days'>
					<CalendarDayNamesComponent />
				</div>
			</div>
			<div className='calendar__body'>
				{dateDays.map((day, index) => (
					<CalendarFieldComponent
						today={isCurrentDay(day)}
						dayNumber={day.getDate()}
						meetings={
							meetingsByDate[day.toISOString().split('T')[0]!] ||
							[]
						}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default CalendarComponent;
