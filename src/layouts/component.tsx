import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
function AppLayout() {
    return (
        <div className="App">
            <Header />
            <main className="container">
                <Outlet />
            </main>
        </div>
    );
}

export default AppLayout;
