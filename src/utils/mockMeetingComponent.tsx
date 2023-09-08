import React from 'react';

interface MockMeetingProps {
	meetingId: string;
	datetime: string;
	description?: string;
}

const Meeting: React.FC<MockMeetingProps> = ({
	datetime,
	meetingId,
	description,
}: MockMeetingProps) => {
	return (
		<div className='meeting'>
			<h4
				className='meeting__date'
				id={meetingId}>
				{datetime}
			</h4>
			{description ? (
				<p className='meeting__desc'>Description: {description}</p>
			) : null}
		</div>
	);
};

export default Meeting;
