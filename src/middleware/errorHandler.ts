/**
 * @module errorHandler
 * @description Module for handling and formatting errors.
 */

/**
 * Error handling utility.
 */
const errorHandler = {
	/**
	 * Handle fetch errors by formatting them into a user-friendly string.
	 *
	 * @param {any} error - The error object to handle.
	 * @returns {string} - A formatted error message including error number and message.
	 */
	handleFetchError: (error: any): string => {
		return `${error.number}: ${error.message}`;
	},
};

export default errorHandler;
