/**
 * @module dataTypes
 * @description Module containing interface definitions for meeting entity.
 */

/**
 * Interface definition for user meeting.
 */

export interface MeetingData {
	id: string;
	dateTime: string;
	participants: string;
	duration: string;
	description: string | null;
}

export type Meetings = MeetingData[];
