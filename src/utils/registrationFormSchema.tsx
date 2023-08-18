import { ZodType, z } from 'zod';
import FormData from './registrationFormData';

const newUser: ZodType<FormData> = z
	.object({
		userType: z.string(),
		firstName: z
			.string()
			.regex(/^[A-Z][a-zA-Z]*$/, {
				message: 'First name should begin with a capital letter',
			})
			.min(2, { message: 'Must be at least 2 characters long' }),
		lastName: z
			.string()
			.regex(/^[A-Z][a-zA-Z]*$/, {
				message: 'Last name should begin with a capital letter',
			})
			.min(2, { message: 'Must be at least 2 characters long' }),
		email: z
			.string()
			.email()
			.regex(
				/^[a-zA-Z0-9]+([.\-_]?[a-zA-Z0-9])*@[a-zA-Z0-9]+(-?[a-zA-Z0-9])*\.[a-zA-Z]{2,}$/,
				{ message: 'Invalid email address' },
			),
		password: z.string().regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[\W_]).{8,}$/, {
			message:
				'Password must be at least 8 characters long and contain at least one uppercase letter, one special character, and one digit.',
		}),
		confirmedPassword: z.string(),
	})
	.required()
	.refine((data) => data.password === data.confirmedPassword, {
		message: 'Passwords do not match.',
		path: ['confirmedPassword'],
	});

export default newUser;
