const apiHandler = {
	apiOptions: async (url: string, payload: any) => {
		const response = await fetch(url, {
			method: 'OPTIONS',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
			credentials: 'include',
		});
		return response;
	},
	apiPost: async (url: string, payload: any) => {
		const response = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});
		return response;
	},
};
export default apiHandler;
