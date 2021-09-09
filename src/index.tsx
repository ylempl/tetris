import React from 'react';
import 'regenerator-runtime/runtime';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import theme from './theme';
import GlobalStyles from './theme/GlobalStyle';
import routesConfig from './routes';

const App = () => {
    const routing = useRoutes(routesConfig);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {routing}
        </ThemeProvider>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);
