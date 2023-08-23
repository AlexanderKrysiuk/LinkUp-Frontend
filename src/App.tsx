//import RegistrationForm from '@components/registrationForm/RegistrationForm.tsx';
import useScript from '@hooks/useScript.tsx';

import React from 'react';

import '@layouts/FormLayout.css';

//import LoginComponent from '@components/loginForm/LoginComponent';
import RegistrationComponent from '@components/registrationForm/RegistrationComponent';
import './App.css';

function App() {
	useScript('../scripts/themeSwitcher.ts');
	return (
		<>
			{/* <RegistrationForm /> */}
			{/* <LoginComponent /> */}
			<RegistrationComponent />
		</>
	);
}

export default App;
