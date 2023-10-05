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
	const handleCardClick = () => {
		setContractorEmail(contractor.email);
	};
	return (
		<div
			className='contractor-card'
			onClick={handleCardClick}>
			<img
				src={contractor.imageUrl} // Dodaj pole imageUrl do danych kontraktora
				alt={`${contractor.userName}'s avatar`}
				className='avatar'
			/>
			<div className='username'>{contractor.userName}</div>
		</div>
	);
};

export default ContractorCard;
