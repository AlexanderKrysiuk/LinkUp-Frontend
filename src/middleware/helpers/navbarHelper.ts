export const setNavbarItems = (userRole: any) => {
	if (userRole === 'Client') {
		return ['home', 'profile', 'logout'];
	} else {
		return ['home', 'new meeting', 'profile', 'logout'];
	}
};
