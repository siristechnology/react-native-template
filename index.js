import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import App from './src/App';
import {name as appName} from './app.json';

const MainApp = () => (
  <PaperProvider
    theme={{
      ...DefaultTheme,
      borderWidth: 0.2,
      colors: {...DefaultTheme.colors, primary: '#1ba1f2'},
    }}>
    <App />
  </PaperProvider>
);
AppRegistry.registerComponent(appName, () => MainApp);
