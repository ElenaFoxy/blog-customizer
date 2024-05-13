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
	params: ArticleStateType;
	setParams: (params: ArticleStateType) => void;
};

export const ArticleParamsForm = ({
	params,
	setParams,
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [state, setState] = useState(params);
	const ref = useRef<HTMLDivElement | null>(null);
	const handleClick = useToggleForm({ isOpen, setIsOpen, ref });

	const handleReset = () => {
		setState(defaultArticleState);
		setParams(defaultArticleState);
	};
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setParams(state);
	};

	const containerClassName = clsx({
		[styles.container]: true,
		[styles.container_open]: isOpen,
	});

	function handleFontChanges(value: OptionType) {
		setState({ ...state, fontFamilyOption: value });
	}

	function handleSizeChanges(value: OptionType) {
		setState({ ...state, fontSizeOption: value });
	}

	function handleFontColorChanges(value: OptionType) {
		setState({ ...state, fontColor: value });
	}

	function handleBackgroundChanges(value: OptionType) {
		setState({ ...state, backgroundColor: value });
	}

	function handleWidthChanges(value: OptionType) {
		setState({ ...state, contentWidth: value });
	}

	return (
		<div ref={ref}>
			<ArrowButton onClick={handleClick} isMenuOpen={isOpen} />
			<aside className={containerClassName}>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
					onReset={handleReset}>
					<Text size={31} weight={800} uppercase={true}>
						{'Задайте параметры'}
					</Text>
					<Select
						selected={state.fontFamilyOption}
						options={fontFamilyOptions}
						title={'Шрифт'}
						onChange={handleFontChanges}></Select>
					<RadioGroup
						name='font-size'
						selected={state.fontSizeOption}
						options={fontSizeOptions}
						title={'Размер шрифта'}
						onChange={handleSizeChanges}></RadioGroup>
					<Select
						selected={state.fontColor}
						options={fontColors}
						title={'Цвет шрифта'}
						onChange={handleFontColorChanges}></Select>
					<Separator />
					<Select
						selected={state.backgroundColor}
						options={backgroundColors}
						title={'Цвет фона'}
						onChange={handleBackgroundChanges}></Select>
					<Select
						selected={state.contentWidth}
						options={contentWidthArr}
						title={'Ширина контента'}
						onChange={handleWidthChanges}></Select>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</div>
	);
};
