import React from 'react';
import 'regenerator-runtime/runtime';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import store from './redux/store';
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
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
