export type NavMenuItem = {
	routeName: string;
	// some type for a react component
	routeIcon: React.FunctionComponent;
	routeAction: (() => void) | null;
};
