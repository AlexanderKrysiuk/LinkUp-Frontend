const apiHandler = {
	apiPost: async (url: string, payload: any) => {
		const response = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
			credentials: 'include',
		});
		return response;
	},
};
export default apiHandler;
