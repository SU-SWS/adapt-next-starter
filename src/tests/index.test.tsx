import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../pages/index';
import { store } from '../redux/store';

describe('Testing Index Page', () => {
  it('Renders Home Page', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    // expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});
