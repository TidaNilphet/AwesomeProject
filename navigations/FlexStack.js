import * as React from 'react';
import BmiScreen from '../screens/BmiScreen';
import NetworkScreen from '../screens/NetworkScreen';
import HomeScreen from '../screens/HomeScreen';
import FlexScreen from '../screens/FlexScreen';
import Ex01Screen from '../screens/Ex01Screen';
import Ex02Screen from '../screens/Ex02Screen';
import Ex03Screen from '../screens/Ex03Screen';
import Ex04Screen from '../screens/Ex04Screen';
import Ex05Screen from '../screens/Ex05Screen';
import Ex06Screen from '../screens/Ex06Screen';
import Ex07Screen from '../screens/Ex07Screen';
import Ex08Screen from '../screens/Ex08Screen';
import Ex09Screen from '../screens/Ex09Screen';
import Ex10Screen from '../screens/Ex10Screen';
import Ex11Screen from '../screens/Ex11Screen';
import Ex12Screen from '../screens/Ex12Screen';
import ExspecialScreen from '../screens/ExspecialScreen';
// import FlexStack from '../navigations/FlexStack';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function FlexStack() {

    return (
        <Stack.Navigator initialRouteName="FlexStack">
            <Stack.Screen
                name="FlexScreen"
                component={FlexScreen}
                options={{ title: 'Flex Title' }}
            />
            <Stack.Screen
                name="Ex01Screen"
                component={Ex01Screen}
                options={{ title: 'Ex01Screen' }}
            />
            <Stack.Screen
                name="Ex02Screen"
                component={Ex02Screen}
                options={{ title: 'Ex02Screen' }}
            />
            <Stack.Screen
                name="Ex03Screen"
                component={Ex03Screen}
                options={{ title: 'Ex03Screen' }}
            />
            <Stack.Screen
                name="Ex04Screen"
                component={Ex04Screen}
                options={{ title: 'Ex04Screen' }}
            />
            <Stack.Screen
                name="Ex05Screen"
                component={Ex05Screen}
                options={{ title: 'Ex05Screen' }}
            />
            <Stack.Screen
                name="Ex06Screen"
                component={Ex06Screen}
                options={{ title: 'Ex06Screen' }}
            />
            <Stack.Screen
                name="Ex07Screen"
                component={Ex07Screen}
                options={{ title: 'Ex07Screen' }}
            />
            <Stack.Screen
                name="Ex08Screen"
                component={Ex08Screen}
                options={{ title: 'Ex08Screen' }}
            />
            <Stack.Screen
                name="Ex09Screen"
                component={Ex09Screen}
                options={{ title: 'Ex09Screen' }}
            />
            <Stack.Screen
                name="Ex10Screen"
                component={Ex10Screen}
                options={{ title: 'Ex10Screen' }}
            />
            <Stack.Screen
                name="Ex11Screen"
                component={Ex11Screen}
                options={{ title: 'Ex11Screen' }}
            />
            <Stack.Screen
                name="Ex12Screen"
                component={Ex12Screen}
                options={{ title: 'Ex0112Screen' }}
            />
            <Stack.Screen
                name="ExspecialScreen"
                component={ExspecialScreen}
                options={{ title: 'ExspecialScreen' }}
            />


        </Stack.Navigator>
    );

}