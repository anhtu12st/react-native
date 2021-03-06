import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Review from '../screens/Review';
import Header from './Header';

const HomeStack = createStackNavigator();

export default function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: '#ddd', height: 80},
      }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          // headerStyle: {backgroundColor: '#ddd'},
          header: ({navigation}) => <Header navigation={navigation} />,
        }}
      />
      <HomeStack.Screen
        name="Review"
        component={Review}
        options={{
          title: 'Overview',
          headerStyle: {backgroundColor: '#0ff'},
        }}
      />
    </HomeStack.Navigator>
  );
}
