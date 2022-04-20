// Core
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Registration from '../pages/Registration';

export const Public: FC = () => {
    return (
        <Routes>
            <Route
                element = { <Registration /> }
                path = '/'
            />
            <Route
                element = {
                    <Navigate
                        replace
                        to = '/'
                    />
                }
                path = '*'
            />
        </Routes>
    );
};
