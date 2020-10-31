import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabs} from './bottom-tabs';
import {Details} from './details';

const Stack = createStackNavigator();

function App({initialScreenName}) {
  const initialRoute =
    initialScreenName === 'ArticleDetail' ? 'ArticleDetail' : 'Tab';

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{headerShown: true}}>
        <Stack.Screen
          name="Tab"
          component={BottomTabs}
          initialParams={{initialScreenName}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerTitle: 'Tweet'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
