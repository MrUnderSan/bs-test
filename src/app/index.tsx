import { Provider } from 'react-redux';
import { store } from 'src/services';
import React from 'react';
import { Router } from './router/router';

export const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};
