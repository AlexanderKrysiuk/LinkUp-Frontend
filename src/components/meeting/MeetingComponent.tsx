/**
 * @module MeetingComponent
 * @description Module containing meeting component.
 */

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteMeeting } from '@middleware/meetingsHandler';
import { getRole } from '@middleware/userHandler';
import React, { useEffect, useState } from 'react';

/**
 * Props for the `MeetingComponent` component.
 */
interface MeetingProps {
	/**
	 * The meeting data to pass.
	 */
	meetingId: string;
	datetime: string;
	description?: string | null;
}

/**
 * MeetingComponent - Component for displaying individual meeting details.
 *
 * This component is responsible for rendering the details of an individual meeting,
 * including its date, time, and description (if available). It also allows users
 * with the 'Contractor' or 'Admin' role to delete the meeting. It uses state to manage
 * the user's role and whether the meeting has been marked as deleted.
 *
 * @component
 * @param {object} props - Props for the MeetingComponent.
 * @param {string} props.meetingId - The unique identifier of the meeting.
 * @param {string} props.datetime - The date and time of the meeting.
 * @param {string | null | undefined} props.description - The optional description of the meeting.
 * @returns {JSX.Element} - Returns a component displaying individual meeting details.
 * @example
 * // Importing the component
 * import MeetingComponent from './MeetingComponent';
 *
 * // Using the component within another component
 * <MeetingComponent meetingId="1" datetime="2023-10-02T15:30:00" description="Project Meeting" />
 */

const MeetingComponent: React.FC<MeetingProps> = ({
	datetime,
	meetingId,
	description,
}: MeetingProps) => {
	const [userRole, setUserRole] = useState<string>();
	const [isDeleted, setIsDeleted] = useState<boolean>(false);

	useEffect(() => {
		// Fetch and set the user's role
		const fetchUserRole = async () => {
			const roleToSet: any = await getRole();
			setUserRole(roleToSet);
		};
		fetchUserRole();
	}, [userRole]);

	const date = datetime.split('T')[0];
	const time = datetime.split('T')[1]?.slice(0, 5);

	if (isDeleted) {
		return null;
	}

	const handleDelete = (meetingId: string) => {
		// Prompt user for confirmation before deleting the meeting
		if (confirm('Are you sure you want to delete this meeting?')) {
			deleteMeeting(meetingId);
			setIsDeleted(true);
		}
	};

	return (
		<div className='meeting'>
			<h4
				className='meeting__datetime'
				id={meetingId}>
				{date}
			</h4>
			<p>Time: {time}</p>
			{description ? (
				<p className='meeting__desc'>Subject: {description}</p>
			) : null}
			{userRole === 'Contractor' || userRole === 'Admin' ? (
				<FontAwesomeIcon
					icon={faTrash}
					className='delete-icon'
					onClick={() => handleDelete(meetingId)}
				/>
			) : null}
		</div>
	);
};

export default MeetingComponent;
