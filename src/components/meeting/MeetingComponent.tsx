import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteMeeting } from '@middleware/meetingsHandler';
import { getRole } from '@middleware/userHandler';
import React, { useEffect, useState } from 'react';

interface MeetingProps {
	meetingId: string;
	datetime: string;
	description?: string | null;
}

const MeetingComponent: React.FC<MeetingProps> = ({
	datetime,
	meetingId,
	description,
}: MeetingProps) => {
	const [userRole, setUserRole] = useState<string>();
	const [isDeleted, setIsDeleted] = useState<boolean>(false);

	useEffect(() => {
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
