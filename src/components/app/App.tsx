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
					'--font-family': articleStyles.fontFamilyOption.value,
					'--font-size': articleStyles.fontSizeOption.value,
					'--font-color': articleStyles.fontColor.value,
					'--container-width': articleStyles.contentWidth.value,
					'--bg-color': articleStyles.backgroundColor.value,
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
