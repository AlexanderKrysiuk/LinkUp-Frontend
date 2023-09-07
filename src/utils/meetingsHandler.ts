import { getUserMeetings } from './apiHandler';

export const getMeetings = async () => {
	const response = await getUserMeetings();
	if (response && response.ok) {
		return await response.json();
	} else {
		//throw new Error("Couldn't get user's meetings.");
		console.error("Couldn't get user's meetings.");
	}
};

// export const getMeetings = async () => {
// 	const token = localStorage.getItem('token');
// 	if (token) {
// 		const response = await getUserMeetings(token);
// 		if (response && response.ok) {
// 			return await response.text();
// 		} else {
// 			//throw new Error("Couldn't get user's meetings.");
// 			console.error("Couldn't get user's meetings.");
// 		}
// 	} else {
// 		//throw new Error('You are not authorized!');
// 		console.error('You are not authorized!');
// 	}
// };
