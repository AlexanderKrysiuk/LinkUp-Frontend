export interface MeetingData {
	id: string;
	dateTime: string;
	participants: string;
	duration: string;
	description: string | null;
}

export type Meetings = MeetingData[];
