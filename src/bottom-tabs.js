import React from 'react';
import color from 'color';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme} from 'react-native-paper';

import {Feed} from './feed';
import {Message} from './message';
import {Notifications} from './notifications';
import CardExample from './CardExample';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = (props) => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Feed"
        shifting={true}
        activeColor={theme.colors.primary}
        inactiveColor={color(theme.colors.text).alpha(0.6).rgb().string()}
        sceneAnimationEnabled={false}
        barStyle={{
          backgroundColor: theme.colors.surface,
          borderTopWidth: theme.borderWidth,
          borderTopColor: theme.colors.disabled,
        }}>
        <Tab.Screen
          name="CardExample"
          component={CardExample}
          options={{
            tabBarIcon: 'home-account',
          }}
        />
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarIcon: 'home-account',
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarIcon: 'bell-outline',
          }}
        />
        <Tab.Screen
          name="Messages"
          component={Message}
          options={{
            tabBarIcon: 'message-text-outline',
          }}
        />
      </Tab.Navigator>
    </React.Fragment>
  );
};
