/**
 * meetingsHandler - Module for handling user meetings and meeting-related operations.
 *
 * This module provides functions for retrieving user meetings, whether upcoming or archived,
 * and for deleting a specific meeting. It relies on API request functions from the 'apiHandler.ts'
 * module to interact with the backend and perform these operations.
 *
 * @module meetingshandler
 */

import {
	deleteUserMeeting,
	getArchivedMeetings,
	getUpcomingMeetings,
} from './apiHandler';

/**
 * Get user meetings based on the specified token and meeting type.
 *
 * @param {string} token - The user's authentication token.
 * @param {string} type - The type of meetings to retrieve ('upcoming' or 'archived'). Default is 'upcoming'.
 * @returns {Promise<any>} - A promise that resolves to the user's meetings if successful.
 */
export const getMeetings = async (token: string, type: string = 'upcoming') => {
	const response =
		type === 'upcoming'
			? await getUpcomingMeetings(token)
			: await getArchivedMeetings(token);
	if (response && response.ok) {
		return await response.json();
	} else {
		//throw new Error("Couldn't get user's meetings.");
		console.error("Couldn't get user's meetings.");
	}
};

/**
 * Delete a specific user meeting based on its ID.
 *
 * @param {string} id - The ID of the meeting to delete.
 */
export const deleteMeeting = async (id: string) => {
	const response = await deleteUserMeeting(id);
	if (response && response.ok) {
		console.log('ok!');
	} else {
		//throw new Error("Couldn't delete meeting.");
		console.error("Couldn't delete meeting.");
	}
};
