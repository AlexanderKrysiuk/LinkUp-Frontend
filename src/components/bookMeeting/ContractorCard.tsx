import React, { Dispatch, SetStateAction } from 'react';
import './ContractorCard.css'; // Dodaj stylizację
interface contractorCardProps {
	setContractorEmail: Dispatch<SetStateAction<string>>;
	contractor: any;
}

const ContractorCard = ({
	contractor,
	setContractorEmail,
}: contractorCardProps) => {
	return (
		<div className='contractor-card'>
			<img
				src={contractor.imageUrl} // Dodaj pole imageUrl do danych kontraktora
				alt={`Avatar użytkownika ${contractor.userName}`}
				className='avatar'
			/>
			<div className='username'>{contractor.userName}</div>
			<button
				onClick={() => {
					setContractorEmail(contractor.email);
					console.log(contractor);
				}}>
				Change Email
			</button>
		</div>
	);
};

export default ContractorCard;

