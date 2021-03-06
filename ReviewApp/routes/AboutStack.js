import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import About from '../screens/About';
import Header from './Header';

const AboutStack = createStackNavigator();

export default function AboutStackScreen() {
  return (
    <AboutStack.Navigator
      initialRouteName="About"
      screenOptions={{
        headerStyle: {backgroundColor: '#ddd'},
      }}>
      <AboutStack.Screen
        name="About"
        component={About}
        options={{
          title: 'About',
          headerStyle: {backgroundColor: '#0ff'},
          header: ({navigation}) => <Header navigation={navigation} />,
        }}
      />
    </AboutStack.Navigator>
  );
}
