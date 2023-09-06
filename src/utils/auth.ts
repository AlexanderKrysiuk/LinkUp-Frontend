export const getAuthHeader = (token: string) => {
	return { Authorization: `Bearer ${token}` };
};
