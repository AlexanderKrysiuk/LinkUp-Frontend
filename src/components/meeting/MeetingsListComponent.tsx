import { MeetingData, Meetings } from '@data/dataTypes';
import React from 'react';
import MeetingComponent from './MeetingComponent';

const MeetingsListComponent = ({
	meetings,
}: {
	meetings: Meetings;
}): JSX.Element => {
	return (
		<div className='meetings'>
			{meetings.map((item: MeetingData, index: number) => {
				return (
					<MeetingComponent
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

export default MeetingsListComponent;
