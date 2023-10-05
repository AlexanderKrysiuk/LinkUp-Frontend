/**
 * @module MeetingsListComponent
 * @description Module containing user's meetings list component.
 */

import { MeetingData, Meetings } from '@data/dataTypes';
import React from 'react';
import MeetingComponent from './MeetingComponent';

/**
 * MeetingsListComponent - Component for rendering a list of meetings.
 *
 * This component is responsible for rendering a list of meetings provided as
 * input. It maps over the `meetings` array and renders individual `MeetingComponent`
 * instances for each meeting in the list.
 *
 * @component
 * @param {object} props - Props for the MeetingsListComponent.
 * @param {Meetings} props.meetings - An array of meetings to be displayed.
 * @returns {JSX.Element} - Returns a component displaying a list of meetings.
 * @example
 * // Importing the component
 * import MeetingsListComponent from './MeetingsListComponent';
 *
 * // Using the component within another component
 * <MeetingsListComponent meetings={meetingsData} />
 */

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
