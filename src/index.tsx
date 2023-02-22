import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './contexts/auth';
import { RouterProvider } from 'react-router-dom';
import router from './pages/routes';
import { QUERY_CONFIG } from './core/config/queryConfig';
import {
    QueryClient,
    QueryClientProvider
} from 'react-query';


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            ...QUERY_CONFIG,
        },
    },
})
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <QueryClientProvider client={queryClient}>
        <AuthProvider>
            <React.StrictMode>
                <RouterProvider router={router} />
            </React.StrictMode>
        </AuthProvider>
    </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
