import { getRole } from '@utils/auth';
import React, { useEffect, useState } from 'react';
import { deleteMeeting } from './meetingsHandler';

interface MockMeetingProps {
	meetingId: string;
	datetime: string;
	description?: string | null;
}

const MockMeetingComponent: React.FC<MockMeetingProps> = ({
	datetime,
	meetingId,
	description,
}: MockMeetingProps) => {
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
		deleteMeeting(meetingId);
		setIsDeleted(true);
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
				<button onClick={() => handleDelete(meetingId)}>
					Delete meeting
				</button>
			) : null}
		</div>
	);
};

export default MockMeetingComponent;

//onClick={deleteMeeting}
