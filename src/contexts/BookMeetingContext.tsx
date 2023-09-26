import React, { useContext } from 'react';

const BookMeetingContext = React.createContext();

const BookMeetingProvider = ({ children }) => {
	return (
		<BookMeetingContext.Provider value='hello'>
			{children}
		</BookMeetingContext.Provider>
	);
};

export { BookMeetingContext, BookMeetingProvider };

