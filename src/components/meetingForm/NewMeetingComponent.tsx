/**
 * @module NewMeetingComponent
 * @description Module containing the new meeting component.
 */

import NewMeetingForm from '@components/meetingForm/NewMeetingForm';
import '@layouts/FormLayout.css';
import React from 'react';

/**
 * Component for rendering the login page.
 *
 * This component renders the new meeting form component.
 *
 * @returns {JSX.Element} - The rendered new meeting component.
 * @example
 * ```tsx
 * // Render the new meeting form
 * <NewMeetingComponent />
 * ```
 */
const NewMeetingComponent = (): JSX.Element => {
	return (
		<div className='form meeting'>
			<NewMeetingForm />
		</div>
	);
};

export default NewMeetingComponent;
