import { useEffect } from 'react';

type UseToggleForm = {
	isOpen: boolean;
	setIsOpen: (newValue: boolean) => void;
	wrapperRef: React.RefObject<HTMLDivElement>;
};

export const useToggleForm = ({
	isOpen,
	setIsOpen,
	wrapperRef,
}: UseToggleForm) => {
	useEffect(() => {
		if (!isOpen) return;
		const handleOutsideClick = (event: MouseEvent) => {
			const { target } = event;
			if (target instanceof Node && !wrapperRef.current?.contains(target)) {
				setIsOpen(false);
			}
		};
		window.addEventListener('mousedown', handleOutsideClick);

		return () => {
			window.removeEventListener('mousedown', handleOutsideClick);
		};
	}, [isOpen, wrapperRef]);
};
