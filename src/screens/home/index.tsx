import React, {Component} from 'react';
import {View, Text} from 'react-native';

type Props = {};

export default class index extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> index </Text>
      </View>
    );
  }
}
