import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from 'screen/home';

export type BottomTabParamList = {
  Home?: {};
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: '홈', headerShown: false }}
      />
    </BottomTab.Navigator>
  );
}
