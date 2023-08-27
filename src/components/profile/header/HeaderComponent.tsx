import React from 'react';
import UserDetailsComponent from './userdetails/UserDetailsComponent.tsx';
import CategoriesComponent from './categories/CategoriesComponent.tsx';

const HeaderComponent = () => {
	return <div className='profile__header'><UserDetailsComponent/><CategoriesComponent/></div>;
};

export default HeaderComponent;
