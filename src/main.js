import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { addCat } from './actions/actions';

import Root, {store} from './routes/routes';

render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('app')
);
