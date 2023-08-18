import useScript from '@hooks/useScript.tsx';
import RegistrationForm from './components/registrationForm/RegistrationForm.tsx';

import React from 'react';

import './components/registrationForm/RegistrationForm.css';

import './App.css';

function App() {
	useScript('../scripts/themeSwitcher.ts');
	return (
		<>
			<RegistrationForm />
		</>
	);
}

export default App;
