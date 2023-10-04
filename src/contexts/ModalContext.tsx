import React, { createContext, useState } from 'react';

type ModalContextValue = {
	modalContent: JSX.Element | null;
	setModal: (content: JSX.Element | null) => void;
};

export const ModalContext: React.Context<ModalContextValue> =
	createContext<ModalContextValue>({
		modalContent: null,
		setModal: () => {},
	});

type ModalProviderProps = {
	children: React.ReactNode;
};

export const ModalProvider = ({
	children,
}: ModalProviderProps): JSX.Element => {
	const [modalContent, setModal] = useState<JSX.Element | null>(null);

	return (
		<ModalContext.Provider value={{ modalContent, setModal }}>
			{children}
		</ModalContext.Provider>
	);
};
