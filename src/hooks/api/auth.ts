import { useQuery, useMutation } from 'react-query';
import { postData } from '../../core/api';
import { AUTH } from '../../core/config/apiConfig';

interface IAuthParams {
    email: string;
    password: string;
}

export const authUser = async (params: IAuthParams) => {
    return postData(`${AUTH.LOGIN.url}`, params).then((res) => res)
}

export const useAuthLogin = (params: IAuthParams) => {
    return useMutation(() => authUser(params), { mutationKey: AUTH.LOGIN.key })
}