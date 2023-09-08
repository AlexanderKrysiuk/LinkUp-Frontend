import { MeetingData, Meetings } from 'const/dataTypes';
import React from 'react';
import MockMeetingComponent from './mockMeetingComponent';

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
