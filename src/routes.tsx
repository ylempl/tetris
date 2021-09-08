import React from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from './components/Layouts/Main';
import Dashboard from './modules/Dashboard/Dashboard';

import NotFoundView from './modules/Errors/NotFound';

const routes = [
    {
        path: 'app',
        element: <MainLayout />,
        children: [
            { path: 'tetris', element: <Dashboard /> },
            { path: '*', element: <Navigate to="/404" /> }
        ]
    },
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '404', element: <NotFoundView /> },
            { path: '/', element: <Navigate to="/app/tetris" /> },
            { path: '*', element: <Navigate to="/404" /> }
        ]
    }
];

export default routes;
