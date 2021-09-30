import React from 'react'
import { Provider } from 'react-redux';
import generateStore from './redux/store';

import { AppRouter } from './routers/AppRouter';

export const PinkFloydApp = () => {
    const store = generateStore();
    return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    )
}
