import React from 'react';
import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';

const { store, persistor } = configureStore();

test('Control Panel Availble', () => {
  render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PersistGate>
    </Provider>
  );
  const controlPanel = screen.getByText(/Control Panel/i);
  expect(controlPanel).toBeInTheDocument();
});
