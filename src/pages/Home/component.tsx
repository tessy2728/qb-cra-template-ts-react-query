import React from 'react';
import { Outlet } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { AUTH } from '../../core/config/apiConfig'
import { IDetailsAPIResponse } from '../../core/interfaces/apiResponse';
import { IUser } from '../../core/interfaces/user';
import { getUserName } from '../../core/utils/sessionHandler';

const Home = () => {
    const queryClient = useQueryClient();
    const dataRes = queryClient.getMutationCache().find({ mutationKey: AUTH.LOGIN.key })?.state.data as IDetailsAPIResponse<IUser>
    console.log(dataRes)
    return <div className="flex flex-column">
        <h1 className="text-left">Welcome {dataRes?.result?.name ?? getUserName()}!</h1>
        <Outlet />
    </div>;
};

export default Home;