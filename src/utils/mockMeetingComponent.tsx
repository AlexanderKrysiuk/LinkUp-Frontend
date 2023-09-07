import React from 'react';

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
	const date = datetime.split('T')[0];
	const time = datetime.split('T')[1]?.slice(0, 5);
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
		</div>
	);
};

export default MockMeetingComponent;
