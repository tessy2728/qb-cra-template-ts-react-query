import React from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';

import Login from './Auth/Login';
import Home, { articlesLoader, articleDetailLoader } from './Home';
import { isLoggedIn, setUserSession } from '../core/utils/sessionHandler'
import AppLayout from '../layouts/component';
import { ErrorPage } from './Error/component';
import ArticleDetails from './Home/Article/Details';
import ArticleList from './Home/Article/List';
import { authUser, IAuthParams } from '../hooks/api/auth';
import { QueryClient } from 'react-query';
import { IAPIResponse, IPostAPIResponse } from '../core/interfaces/apiResponse';
import { IUser } from '../core/interfaces/user';
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [{
      path: "/",
      element: <Login />,
      action: async ({ request, params }) => {
        const formData = await request.formData();
        const postParams: IAuthParams = Object.fromEntries(formData) as unknown as IAuthParams;
        const res = await authUser(postParams);
        if (res.status === 200) {
          const { result, token } = res as unknown as IPostAPIResponse<IUser>;
          setUserSession({ name: result.name, accessToken: token, userDetails: result });
          queryClient.setQueryData('USER', (state: any) => ({
            ...state,
            user: { name: result.name, accessToken: token, userDetails: result }
          }))
          return redirect(`/home/articles`)
        }
        return;
      }
    },
    {
      path: "home",
      element: <Home />,
      loader: async () => {
        const isSignedIn = isLoggedIn();
        if (!isSignedIn) {
          return redirect("/");
        }
        return null;
      },
      children: [{
        path: "articles",
        shouldRevalidate: () => false,
        loader: articlesLoader,
        element: <ArticleList />,
      }, {
        path: 'articles/:articleId',
        element: <ArticleDetails />,
        loader: articleDetailLoader
      }]
    }]
  },


]);

export default router;