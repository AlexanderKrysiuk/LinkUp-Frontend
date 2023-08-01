import FooterLayout from '@layouts/footer/FooterLayout';
import NavbarLayout from '@layouts/header/NavbarLayout';
import MainLayout from '@layouts/main/MainLayout';
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
