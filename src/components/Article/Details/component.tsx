import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { IAPIResponse } from '../../../core/interfaces/apiResponse';
import { IArticle } from '../../../core/interfaces/article';
import { ArticleBody, ArticleHeader, ArticleImage, Divider } from '../style';

const ArticleDetails = () => {
  const data = (useLoaderData() as IAPIResponse<IArticle>);
  const article: IArticle = data.result[0];

  return <div className="flex flex-column">
    <ArticleHeader className="card__item">
      <h6 className="card__item card__item--small card__label">Featured</h6>
      <h2 className="card__item card__item--small card__title">{article.title}</h2>
    </ArticleHeader>
    <ArticleImage>
      <img src={article.picture} alt="waves" />
    </ArticleImage>
    <Divider className="card__item" />

    <ArticleBody className="card__item card__body">
      <p>{article.body}</p>
    </ArticleBody>
  </div>;
};

export default ArticleDetails;
