import { UserAuth } from '../interfaces/user';
import { getCookie } from './cookie';
const SESSION_NAME = 'qb-react-ts-boilerplate.session'; //Replace app with ProjectName

export const setUserSession = (data: UserAuth) => {
    localStorage.setItem(SESSION_NAME, JSON.stringify(data));
    document.cookie = "AccessToken=" + data.accessToken;
};

export const getUserSession = () => {
    const data = localStorage.getItem(SESSION_NAME) || '{}';
    return JSON.parse(data);
};

export const removeUserSession = () => {
    localStorage.removeItem(SESSION_NAME);
    document.cookie = "AccessToken=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'"
};

export const getAccessToken = () => getCookie('AccessToken');

export const getUserName = () => getUserSession().name;

export const getUserId = () => getUserSession().userDetails?.id;

export const isLoggedIn = () => !!getCookie('AccessToken');