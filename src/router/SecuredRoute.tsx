import { getRole } from '@middleware/userHandler.ts';
import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

enum RoleEnum {
	'Visitor',
	'Client',
	'Contractor',
	'Admin',
}
type RoleTypes = 'Visitor' | 'Client' | 'Contractor' | 'Admin';

interface SecuredRouteProps {
	children: React.ReactElement;
	requiredRole?: RoleTypes;
	redirectPath?: string;
}

const SecuredRoute = ({
	children,
	requiredRole = 'Visitor',
	redirectPath = '/login',
}: SecuredRouteProps): React.ReactNode => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const [userRole, setUserRole] = useState<RoleEnum | null>(null);
	const user: string = 'Visitor';

	let authRole: RoleEnum = convertRole(requiredRole);

	useEffect(() => {
		const fetchUserRole = async () => {
			try {
				const roleToSet: string | undefined = await getRole();

				if (typeof roleToSet === 'string') {
					const convertedUserRole = convertRole(roleToSet);

					setUserRole(convertedUserRole);

					// Verify authorization here and navigate if necessary
					if (!checkAuthorization(convertedUserRole, authRole)) {
						navigate(redirectPath, { replace: true });
					}
				} else {
					// If roleToSet is undefined, user is not logged in, navigate to login
					navigate(redirectPath, { replace: true });
				}

				setLoading(false);
			} catch (error) {
				console.error('Error fetching user role:', error);
				setLoading(false);
			}
		};

		if (user) {
			fetchUserRole();
		} else {
			setLoading(false);
		}
	}, [user, authRole, navigate, redirectPath]);

	if (loading) {
		return null;
	}

	return userRole !== null && userRole >= authRole ? children : null;
};

const checkAuthorization = (
	user: RoleEnum,
	requiredRole: RoleEnum,
): boolean => {
	return user >= requiredRole;
};

const convertRole = (role: string): RoleEnum => {
	const convertedRole = RoleEnum[role as keyof typeof RoleEnum];
	return convertedRole;
};

export default SecuredRoute;
