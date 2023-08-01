import FooterLayout from '@layouts/FooterLayout.tsx';
import MainLayout from '@layouts/MainLayout.tsx';
import NavbarLayout from '@layouts/NavbarLayout.tsx';
import React from 'react';

const HomePage = () => {
	return (
		<>
			<NavbarLayout />
			<MainLayout />
			<FooterLayout />
		</>
	);
};

export default HomePage;
