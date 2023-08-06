import FooterLayout from '@layouts/footer/FooterLayout';
import NavbarLayout from '@layouts/header/NavbarLayout';

import MainLayout from '@layouts/main/MainLayout';

import React from 'react';

const session_id = '8520b3f0-6bc4-4fd4-9e04-b01e36e31d18';

const HomePage = () => {
	// get all cookies
	const allCookies = document.cookie;

	// split cookies into individual key-value pairs
	const cookieArray = allCookies.split('; ');
	// find the cookie you want to read
	const sessionId = cookieArray.find((cookie) =>
		cookie.startsWith('sess_id='),
	);
	// get the value of the cookie
	const myCookieValue = sessionId ? sessionId.split('=')[1] : null;

	myCookieValue === session_id ? (document.cookie = 'verified=true') : null;
	return (
		<>
			<NavbarLayout />
			<MainLayout />
			<FooterLayout />
		</>
	);
};

export default HomePage;
