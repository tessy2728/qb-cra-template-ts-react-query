import React, { Fragment } from 'react';
import { RouterProvider } from 'react-router-dom';
import Style from './style';
import router from './pages/routes';
import { QUERY_CONFIG } from './core/config/queryConfig';
import {
    QueryClient,
    QueryClientProvider
} from 'react-query';

const App = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                ...QUERY_CONFIG,
            },
        },
    })
    console.log(queryClient)
    return (
        <QueryClientProvider client={queryClient}>
            <Style.GlobalStyle />
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
};

export default App;
