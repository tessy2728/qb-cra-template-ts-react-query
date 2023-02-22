import React from 'react';
import logo from '../../logo.svg';
import { isLoggedIn, removeUserSession } from '../../core/utils/sessionHandler'
import { showToaster } from '../../core/utils/toast';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';
function Header() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const logoutSession = async () => {
        await removeUserSession();
        showToaster(queryClient, { message: 'Signed out successfully!', type: 'success', autoHideDuration: 5000 })
        navigate('/');
    }
    return <header className='App-header'>
        <div className="App-title">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                React Boilerplate
            </p>
        </div>

        {isLoggedIn() && <a className="App-link" onClick={logoutSession}>
            Logout
        </a>}
    </header>;
}

export default Header;
