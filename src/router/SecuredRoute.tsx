import React from 'react';
import { useNavigate } from 'react-router-dom';

enum roleEnum {
	'client',
	'contractor',
	'admin',
}

interface user {
	name: string;
	email: string;
	role: string;
}

interface SecuredRouteProps {
	user: user | null;
	children: React.ReactNode;
	requiredRole?: string | null;
	redirectPath?: string;
}

const checkRole = (user: roleEnum, requiredRole: roleEnum): boolean => {
	return user >= requiredRole;
};

const SecuredRoute = ({
	user,
	children,
	requiredRole = null,
	redirectPath = '/login',
}: SecuredRouteProps): React.ReactNode => {
	const navigate = useNavigate();
	const userRole: roleEnum | null = user
		? roleEnum[user.role as keyof typeof roleEnum]
		: null;
	const authRole: roleEnum | null = requiredRole
		? roleEnum[requiredRole as keyof typeof roleEnum]
		: null;

	if (!user) {
		navigate(redirectPath, { replace: true });
	}
	if (authRole && userRole && checkRole(userRole, authRole)) {
		navigate(redirectPath, { replace: true });
	}

	return children;
};
export default SecuredRoute;
