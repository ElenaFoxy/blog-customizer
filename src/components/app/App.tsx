import { CSSProperties, useState } from 'react';

import { Article } from 'components/article/Article';
import { ArticleParamsForm } from 'components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from 'src/constants/articleProps';

import 'src/styles/index.scss';
import styles from 'src/styles/index.module.scss';

export const App = () => {
	const [articleStyles, setArticleStyles] = useState(defaultArticleState);
	return (
		<div
			className={styles.main}
			style={
				{
					'--font-family': defaultArticleState.fontFamilyOption.value,
					'--font-size': defaultArticleState.fontSizeOption.value,
					'--font-color': defaultArticleState.fontColor.value,
					'--container-width': defaultArticleState.contentWidth.value,
					'--bg-color': defaultArticleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				articleStyles={articleStyles}
				setArticleStyles={setArticleStyles}
			/>
			<Article />
		</div>
	);
};
