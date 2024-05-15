import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

type ArrowButtonProps = {
	onClick: OnClick;
	isMenuOpen: boolean;
};

export const ArrowButton = ({ onClick, isMenuOpen }: ArrowButtonProps) => {
	const arrowClassName = clsx({
		[styles.arrow]: true,
		[styles.arrow_open]: isMenuOpen,
	});

	const containerClassName = clsx({
		[styles.container]: true,
		[styles.container_open]: isMenuOpen,
	});

	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={containerClassName}
			onClick={onClick}>
			<img src={arrow} alt='иконка стрелочки' className={arrowClassName} />
		</div>
	);
};
