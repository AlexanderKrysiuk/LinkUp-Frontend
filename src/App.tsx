// import BadgeComponent from '@components/navbar/badge/Badge.tsx';
// import ButtonComponent from '@components/navbar/button/Button.tsx';
import RegistrationForm from '@components/registrationForm/RegistrationForm.tsx';
import useScript from '@hooks/useScript.tsx';

import React from 'react';

import './App.css';

//import imageIcon from './assets/image-regular.svg';

function App() {
	useScript('../scripts/themeSwitcher.ts');
	return (
		<>
			{/* <BadgeComponent
				text='sample'
				source={imageIcon}
			/>
			<ButtonComponent /> */}
			<RegistrationForm />
		</>
	);
}

export default App;
