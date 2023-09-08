/**
 * @module Meeting
 * @description Module containing a meeting component.
 */

import React from 'react';
import './Meeting.css';

/**
 * Props for the Meeting component.
 */
interface MeetingProps {
	/**
	 * The date of the meeting.
	 */
	date: string;

	/**
	 * The description of the meeting.
	 */
	description: string;
}

/**
 * A component for displaying a meeting with a date and optional description.
 *
 * This component renders a meeting with a specified date and an optional description.
 * If a description is provided and not empty, it will be displayed; otherwise, the description is omitted.
 *
 * @component
 * @param {MeetingProps} props - The props object containing meeting properties.
 * @param {string} props.date - The date of the meeting.
 * @param {string} props.description - The description of the meeting.
 * @returns {JSX.Element} - The rendered meeting component.
 * @example
 * ```tsx
 * <Meeting date="2023-08-25" description="Discuss project updates." />
 * ```
 */
const Meeting = ({ date, description }: MeetingProps): JSX.Element => {
	return (
		<div className='meeting'>
			<h4 className='meeting__date'>{date}</h4>
			{description.length > 0 ? (
				<p className='meeting__desc'>Description: {description}</p>
			) : null}
		</div>
	);
};

export default Meeting;
