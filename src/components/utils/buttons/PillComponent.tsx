import React from 'react';
import './PillComponent.css';

const PillComponent = ({ text }: { text: string }) => {
	return <button className='pill-button'>{text}</button>;
};

export default PillComponent;
