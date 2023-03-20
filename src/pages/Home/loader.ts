import { QueryClient } from 'react-query'
import { ARTICLES_GET_QUERY, articleDetailsQuery } from '../../hooks/api/articles';
const queryClient = new QueryClient();

export const articlesLoader = async () => {
  try {
    return queryClient.getQueryData(ARTICLES_GET_QUERY.queryKey) ?? await queryClient.fetchQuery(ARTICLES_GET_QUERY)
  } catch (error) {
    return error;
  }
}

export const articleDetailLoader = async ({ params: { articleId } }: any) => {
  try {
    return queryClient.getQueryData(articleDetailsQuery(articleId).queryKey) ?? await queryClient.fetchQuery(articleDetailsQuery(articleId))
  } catch (error) {
    return error;
  }
};

