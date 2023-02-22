import React, { useEffect } from 'react';
import ArticleCard from '../../ArticleCard/component'
import { IArticle } from '../../../core/interfaces/article';
import { getUserId } from '../../../core/utils/sessionHandler';
import { useLoaderData } from 'react-router-dom';
import { IAPIResponse } from '../../../core/interfaces/apiResponse';

const ArticleList = () => {
    const data = (useLoaderData() as IAPIResponse<IArticle>);
    const articles: IArticle[] = data?.result;
    console.log(articles)
    const userId = getUserId();

    return <div className="flex flex-column">
        <p className="text-left">Here are some articles for you:</p>
        <div className="grid grid-cols-3">{articles?.filter((article: IArticle) => article.user_id == userId).map((article: IArticle) => <ArticleCard key={article.id} article={article} />)}</div>
    </div>;
};

export default ArticleList;
