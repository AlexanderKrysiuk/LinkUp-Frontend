// ContentComponent.tsx
import React from 'react';

interface ContentComponentProps {
	selectedHeaderCategory: string;
	selectedSidebarSubcategory: string;
}

const ContentComponent: React.FC<ContentComponentProps> = ({
	selectedHeaderCategory,
	selectedSidebarSubcategory,
}) => {
	return (
		<div className='profile__content'>
			{/* Render content based on selected category and subcategory */}
			{/* ... */}
		</div>
	);
};

export default ContentComponent;
