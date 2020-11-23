import 'react-native';
import React from 'react';
import renderer, { act } from 'react-test-renderer';

import App from '../src/App';

it('renders correctly', async () => {
  await act(async () => {
    renderer.create(<App />);
  });
  
});
