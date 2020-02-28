import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from 'screens/home/index';

type HomeStackParamList = {
  Home: {someProps: string};
  bla: {someProps: string};
};

const HomeStack = createStackNavigator<HomeStackParamList>();
const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
  </HomeStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <HomeStackNavigator />
  </NavigationContainer>
);
