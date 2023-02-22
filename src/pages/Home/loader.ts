import { QueryClient } from 'react-query'
import { ARTICLES_GET_QUERY, articleDetailsQuery } from '../../hooks/api/articles';
const queryClient = new QueryClient();

export const articlesLoader = async () => {
  try {
    return await queryClient.fetchQuery(ARTICLES_GET_QUERY)
  } catch (error) {
    return error;
  }
}

export const articleDetailLoader = async ({ params: { articleId } }: any) => {
  try {
    return await queryClient.fetchQuery(articleDetailsQuery(articleId))
  } catch (error) {
    return error;
  }
};

