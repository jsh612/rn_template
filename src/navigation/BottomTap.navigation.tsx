import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from 'components/TabBar';
import React from 'react';
import Test1Screen from 'screen/Test1';
import Test2Screen from 'screen/Test2';
import Test3Screen from 'screen/Test3';

export type BottomTabParamList = {
  Test1?: {};
  Test2?: {};
  Test3?: {};
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator tabBar={TabBar}>
      <BottomTab.Group key={'VISIBLE_ON_TAB'}>
        <BottomTab.Screen
          name="Test1"
          component={Test1Screen}
          options={{
            headerShown: false,
            title: '테스트1',
          }}
        />
        <BottomTab.Screen
          name="Test2"
          component={Test2Screen}
          options={{
            headerShown: false,
            title: '테스트2',
          }}
        />
      </BottomTab.Group>
      <BottomTab.Screen
        name="Test3"
        component={Test3Screen}
        options={{
          headerShown: false,
          title: '테스트3',
        }}
      />
    </BottomTab.Navigator>
  );
}
