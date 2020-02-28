import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from 'screens/home';
import SettingsScreen from 'screens/settings';

export type HomeStackParamList = {
  Home: undefined;
  Settings: {username: string};
};

const HomeStack = createStackNavigator<HomeStackParamList>();
const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen
      name="Settings"
      component={SettingsScreen}
      initialParams={{username: ''}}
    />
  </HomeStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <HomeStackNavigator />
  </NavigationContainer>
);
