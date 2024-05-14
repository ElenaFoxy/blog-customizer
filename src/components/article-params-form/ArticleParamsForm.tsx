import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';
import { Select } from 'components/select';
import { RadioGroup } from 'components/radio-group';
import { useToggleForm } from './hooks/useToggleForm';
import { Separator } from '../separator';
import { useState, useRef, FormEvent } from 'react';

import styles from './ArticleParamsForm.module.scss';
import {
	ArticleStateType,
	defaultArticleState,
	OptionType,
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
} from 'src/constants/articleProps';
import clsx from 'clsx';

type ArticleParamsFormProps = {
	articleStyles: ArticleStateType;
	setArticleStyles: (params: ArticleStateType) => void;
};

export const ArticleParamsForm = ({
	articleStyles,
	setArticleStyles,
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [componentState, setComponentState] = useState(articleStyles);
	const wrapperRef = useRef<HTMLDivElement | null>(null);
	const handleClick = useToggleForm({ isOpen, setIsOpen, wrapperRef });
	const onClick = () => setIsOpen(!isOpen);

	const handleReset = () => {
		setComponentState(defaultArticleState);
		setArticleStyles(defaultArticleState);
	};
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setArticleStyles(componentState);
	};

	const containerClassName = clsx({
		[styles.container]: true,
		[styles.container_open]: isOpen,
	});

	function handleFontChanges(value: OptionType) {
		setComponentState({ ...componentState, fontFamilyOption: value });
	}

	function handleSizeChanges(value: OptionType) {
		setComponentState({ ...componentState, fontSizeOption: value });
	}

	function handleFontColorChanges(value: OptionType) {
		setComponentState({ ...componentState, fontColor: value });
	}

	function handleBackgroundChanges(value: OptionType) {
		setComponentState({ ...componentState, backgroundColor: value });
	}

	function handleWidthChanges(value: OptionType) {
		setComponentState({ ...componentState, contentWidth: value });
	}

	return (
		<div ref={wrapperRef}>
			<ArrowButton onClick={onClick} isMenuOpen={isOpen} />
			<aside className={containerClassName}>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
					onReset={handleReset}>
					<Text size={31} weight={800} uppercase={true}>
						{'Задайте параметры'}
					</Text>
					<Select
						selected={componentState.fontFamilyOption}
						options={fontFamilyOptions}
						title={'Шрифт'}
						onChange={handleFontChanges}
					/>
					<RadioGroup
						name='font-size'
						selected={componentState.fontSizeOption}
						options={fontSizeOptions}
						title={'Размер шрифта'}
						onChange={handleSizeChanges}
					/>
					<Select
						selected={componentState.fontColor}
						options={fontColors}
						title={'Цвет шрифта'}
						onChange={handleFontColorChanges}
					/>
					<Separator />
					<Select
						selected={componentState.backgroundColor}
						options={backgroundColors}
						title={'Цвет фона'}
						onChange={handleBackgroundChanges}
					/>
					<Select
						selected={componentState.contentWidth}
						options={contentWidthArr}
						title={'Ширина контента'}
						onChange={handleWidthChanges}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</div>
	);
};
