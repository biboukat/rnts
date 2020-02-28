import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {HomeStackParamList} from 'navigation';

type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default class Home extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  private handleSettingsPress = (username: string) => (): void => {
    this.props.navigation.navigate('Settings', {username});
  };

  render() {
    return (
      <View>
        <Text>{'Home screen'}</Text>

        <TouchableOpacity onPress={this.handleSettingsPress('Iban')}>
          <Text>{'Open settings'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.handleSettingsPress('Iban sam')}>
          <Text>{'Open settings'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
