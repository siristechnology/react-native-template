import 'react-native';
import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native'

import App from '../src/App';

it('renders correctly', async () => {
  await act(async () => {
    render(<App />)
  });
  
});
