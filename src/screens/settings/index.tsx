import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

import {HomeStackParamList} from 'navigation';

type SettingsScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Settings'
>;
type SettingsScreenRouteProp = RouteProp<HomeStackParamList, 'Settings'>;

type Props = {
  naviagtion: SettingsScreenNavigationProp;
  route: SettingsScreenRouteProp;
};

export default class Settings extends Component<Props> {
  render() {
    const {username} = this.props.route.params;
    return (
      <View>
        <Text>{`Settings for ---> ${username}`}</Text>
      </View>
    );
  }
}
