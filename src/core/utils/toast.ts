import { QueryClient } from 'react-query';

export interface IToast {
    message: string;
    autoHideDuration: number;
    type: string;
    show?: boolean;
}
export const showToaster = (queryClient: QueryClient, { message, autoHideDuration, type }: IToast) => {
    queryClient.setQueryData('TOAST', (state: any) => ({
        ...state,
        message, autoHideDuration, type,
        show: true
    }))
    console.log(queryClient)
}

export const hideToaster = (queryClient: QueryClient) => {
    queryClient.setQueryData('TOAST', (state: any) => ({
        ...state,
        message: '', autoHideDuration: null, type: '',
        show: false
    }))
}