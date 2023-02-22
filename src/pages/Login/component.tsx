import React, { useEffect, useState, FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Wrapper from './style';
import Loader from '../../components/Loader';
import { useAuthLogin } from '../../hooks/api/auth';
import { setUserSession, isLoggedIn } from '../../core/utils/sessionHandler';
import { IMutationResponse } from '../../core/interfaces/mutation';
import { useQueryClient } from 'react-query'
import { hideToaster, IToast } from '../../core/utils/toast';
import Alert from '../../components/Alert';
import { isObject } from '../../core/utils/utils';
const LoginComponent: FC<any> = (props) => {
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { data, error, mutate: login, isSuccess: isLoginSuccess, isError: isLoginrror, isLoading }: IMutationResponse = useAuthLogin({ email: email, password: password })
    const queryClient = useQueryClient();
    const alertConfig: IToast = queryClient.getQueryCache().find('TOAST')?.state.data as IToast
    console.log(alertConfig, queryClient.getQueryCache())
    useEffect(() => {
        if (isLoggedIn()) {
            setPassword('');
            navigate('/home/articles');
        }
    }, [isLoggedIn]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login();
    };
    useEffect(() => {
        if (isLoginSuccess) {
            const { result, token } = data;
            setUserSession({ name: result.name, accessToken: token, userDetails: result });
            setPassword('');
            navigate('/home/articles');
            queryClient.setQueryData('USER', (state: any) => ({
                ...state,
                user: { name: result.name, accessToken: token, userDetails: result }
            }))
            console.log(queryClient)
        }

    }, [isLoginSuccess, data])

    useEffect(() => {
        if (isLoginrror)
            setLoginError(error.data.message)

    }, [isLoginrror, error])

    return (
        <Wrapper {...props}>
            {isObject(alertConfig) && alertConfig?.message && <Alert {...alertConfig} clearAlert={() => hideToaster(queryClient)}></Alert>}

            {!isLoading && <section>
                <form className="login-form" onSubmit={onSubmit}>
                    <h1>Welcome to FEED!</h1>
                    <input
                        autoFocus
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={onChange}
                        autoComplete="email"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        autoComplete="current-password"
                    />
                    <button type="submit" disabled={!email || !password}>
                        Sign in
                    </button>
                </form>
                <p className="error">{loginError}</p>
                <div className="signup">
                    Don&apos;t have an account? <a href="/signup">Sign up</a>
                </div>
            </section>}
            {isLoading && <Loader />}
        </Wrapper>
    );
};

export default LoginComponent;
