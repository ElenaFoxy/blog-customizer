import { useEffect } from 'react';

type UseToggleForm = {
	isOpen: boolean;
	setIsOpen: (newValue: boolean) => void;
	ref: React.RefObject<HTMLDivElement>;
};

export const useToggleForm = ({
	isOpen,
	setIsOpen,
    ref,
}: UseToggleForm) => {
	function handleClick() {
		setIsOpen(!isOpen);
	}

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			const { target } = event;
			if (target instanceof Node && !ref.current?.contains(target)) {
				setIsOpen(false);
			}
		};

		window.addEventListener('mousedown', handleOutsideClick);

		return () => {
			window.removeEventListener('mousedown', handleOutsideClick);
		};
	}, [isOpen, setIsOpen, ref]);

	return handleClick;

};