import { MeetingData, Meetings } from '@utils/dataTypes';
import MockMeetingComponent from '@utils/mockMeetingComponent';
import React from 'react';

const MockMeetings = ({ meetings }: { meetings: Meetings }): JSX.Element => {
	return (
		<div className='meetings'>
			{meetings.map((item: MeetingData, index: number) => {
				return (
					<MockMeetingComponent
						datetime={item.dateTime}
						meetingId={item.id}
						description={item.description}
						key={index}
					/>
				);
			})}
		</div>
	);
};

export default MockMeetings;
