export const setNavbarItems = (isLogged: boolean) => {
	return isLogged
		? ['home', 'new meeting', 'profile', 'logout']
		: ['home', 'register', 'login'];
};
