import {View} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import RootStack from './src/navigation/RootStack';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <RootStack />
    </View>
  );
}
