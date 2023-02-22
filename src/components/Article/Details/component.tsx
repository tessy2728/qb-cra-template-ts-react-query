import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { IAPIResponse } from '../../../core/interfaces/apiResponse';
import { IArticle } from '../../../core/interfaces/article';

const ArticleDetails = () => {
  const data = (useLoaderData() as IAPIResponse<IArticle>);
  const article: IArticle = data.result[0];

  return <div className="flex flex-column">
    <header className="card__item card__header">
      <h6 className="card__item card__item--small card__label">Featured</h6>
      <h2 className="card__item card__item--small card__title">{article.title}</h2>
    </header>
    <figure className="card__feature">
      <img src={article.picture} alt="waves" />
    </figure>
    <hr className="card__item card__divider" />

    <section className="card__item card__body">
      <p>{article.body}</p>
    </section>
  </div>;
};

export default ArticleDetails;
