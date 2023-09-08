const errorHandler = {
	handleFetchError: (error: any) => {
		return `${error.number}: ${error.message}`;
	},
};

export default errorHandler;
