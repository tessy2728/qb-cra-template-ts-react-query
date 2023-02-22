import { useQuery, useMutation } from 'react-query';
import { getData, postData } from '../../core/api';
import { GET_ARTICLES, GET_ARTICLE_DETAILS } from '../../core/config/apiConfig';

export const getArticles = async () => {
    return getData(GET_ARTICLES.url).then((res) => res);
};

export const getArticleDetails = async (id: string) => {
    return getData(`${GET_ARTICLE_DETAILS.url}/${id}`).then((res) => res);
};
export const ARTICLES_GET_QUERY = {
    queryKey: [GET_ARTICLES.key],
    queryFn: getArticles,
}

export const useArticles = (isLoggedIn?: boolean) => {
    return useQuery(ARTICLES_GET_QUERY);
};

export const articleDetailsQuery = (id: string) => ({
    queryKey: [GET_ARTICLE_DETAILS.key],
    queryFn: () => getArticleDetails(id),
})

export const useArticleDetail = (id: string, isLoggedIn?: boolean) => {
    return useQuery({ queryKey: [GET_ARTICLE_DETAILS.key, id, ...(isLoggedIn ? [isLoggedIn] : [])], queryFn: () => getArticleDetails(id), enabled: !!id || isLoggedIn });
};