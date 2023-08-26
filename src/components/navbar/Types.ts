/**
 * Type representing a navigation menu item.
 *
 * This type defines the structure of a navigation menu item, including its name, icon, and action.
 *
 * @typedef {Object} NavMenuItem
 * @property {string} routeName - The name of the navigation menu item.
 * @property {React.FunctionComponent} routeIcon - The SVG icon component for the navigation menu item.
 * @property {(() => void) | null} routeAction - The optional action function to be executed when the item is clicked.
 */
export type NavMenuItem = {
	/**
	 * The name of the navigation menu item.
	 */
	routeName: string;

	/**
	 * The SVG icon component for the navigation menu item.
	 */
	routeIcon: React.FunctionComponent;

	/**
	 * The optional action function to be executed when the item is clicked.
	 */
	routeAction: (() => void) | null;
};
