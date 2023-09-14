import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

enum RoleEnum {
	'visitor',
	'client',
	'contractor',
	'admin',
}
type RoleTypes = 'visitor' | 'client' | 'contractor' | 'admin';
export interface User {
	name: string;
	email: string;
	role: RoleTypes;
}

interface SecuredRouteProps {
	children: React.ReactElement;
	user?: User;
	requiredRole?: RoleTypes;
	redirectPath?: string;
}

const SecuredRoute = ({
	user,
	children,
	requiredRole = 'visitor',
	redirectPath = '/login',
}: SecuredRouteProps): React.ReactNode => {
	const navigate = useNavigate();

	let userRole: RoleEnum;
	let authRole: RoleEnum;

	if (user) {
		userRole = convertRole(user.role);
		authRole = convertRole(requiredRole);
	} else {
		userRole = RoleEnum.visitor;
		authRole = RoleEnum.visitor;
	}

	useEffect(() => {
		if (!user) {
			navigate(redirectPath, { replace: true });
			return;
		} else if (
			authRole &&
			userRole &&
			!checkAuthorization(userRole, authRole)
		) {
			navigate(redirectPath, { replace: true });
			return;
		}
	}, [user, authRole, userRole, navigate, redirectPath]);

	return userRole >= authRole ? children : null;
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
