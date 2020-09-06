import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MidtermFirstScreen from '../screens/MidtermFirstScreen';
import MidtermScreen from '../screens/MidtermScreen';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

export default function MidtermTopTab() {

    return (

        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                switch (route.name) {
                    case "FlashScreen":
                        iconName = 'md-flash';
                        break;
                    case "FlameScreen":
                        iconName = 'md-flame';
                        break;
                    case "LeafScreen":
                        iconName = 'md-leaf';
                        break;
                }

                // You can return any component that you like here!
                return
                <Ionicons name={iconName} size={size} color={color} />;
            },

        })}

            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}>

            <Tab.Screen name="MidtermScreen" component={MidtermScreen} options={{ title: 'MIDTERMHOME' }} />
            <Tab.Screen name="MidtermFirstScreen" component={MidtermFirstScreen} options={{ title: 'MIDTER TAB SCREEN' }} />

        </Tab.Navigator>
    );
}