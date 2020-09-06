import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './navigations/HomeStack';
import BottomTab from './navigations/BottomTab';
import SecondBottomTab from './navigations/SecondBottomTab';
import { createStackNavigator } from '@react-navigation/stack';
import MidtermTopTab from './navigations/MidtermTopTab';
import MidtermFirstScreenTitle from './navigations/MidtermTopTab';
import TodoTab from './navigations/TodoTab';
const RootStack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="BottomTab">
        <RootStack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{ title: 'Main', headerShown: false }}
        />

        <RootStack.Screen
          name="SecondBottomTab"
          component={SecondBottomTab}
          options={{ title: 'Second Tab' }}
        />

        <RootStack.Screen
          name="MidtermTopTab"
          component={MidtermTopTab}
          options={{ title: 'Top Tab' }}
        />
        <RootStack.Screen
          name="TodoTab"
          component={TodoTab}
          options={{ title: 'Todo Tab' }}
        />

      </RootStack.Navigator>

    </NavigationContainer>
  );

}
