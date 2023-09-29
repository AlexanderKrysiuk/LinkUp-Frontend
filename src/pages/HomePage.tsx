import ContractorMeetingsList from '@components/bookMeeting/ContractorMeetingsList.tsx';
import ContractorsList from '@components/bookMeeting/ContractorsList.tsx';
import NewMeetingForm from '@components/meetingForm/NewMeetingForm.tsx';
import { useBackdrop } from '@hooks/BackdropHooks.tsx';
import { useModal } from '@hooks/ModalHooks.tsx';
import React, { useState } from 'react';

const HomePage = (): JSX.Element => {
	const { toggleBackdrop } = useBackdrop();
	const { setModal } = useModal();
	const [contractorEmail, setContractorEmail] = useState('');

	const handleToggle = () => {
		console.log('button clicked');
		setModal(<NewMeetingForm />);
		toggleBackdrop();
	};

	return (
		<>
			<ContractorsList setContractorEmail={setContractorEmail} />
			<ContractorMeetingsList contractorEmail={contractorEmail} />
			<h1 className='h1'>Home</h1>
			<button onClick={handleToggle}>Toggle Backdrop</button>
		</>
	);
};

export default HomePage;
