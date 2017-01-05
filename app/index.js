import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import { Router } from 'react-router';
import routes from './routes';
import './styles/main.scss';

render(
    <AppContainer>
        <Router history={browserHistory} routes={routes} />
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./routes', () => {
        const NewRoot = require('./routes').default;
        render(
            <AppContainer>
                <NewRoot history={history} routes={routes} />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
