import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { NavigationHelpers, TabNavigationState } from '@react-navigation/native';
import IconBase from 'components/common/icons';
import { IconKindType } from 'components/common/icons/icon.interface';
import { ColorCodes } from 'constants/colors';
import { BottomTabParamList } from 'navigation/BottomTap.navigation';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface IBottomTabBarProps extends BottomTabBarProps {
  state: TabNavigationState<BottomTabParamList>;
  navigation: NavigationHelpers<BottomTabParamList, BottomTabNavigationEventMap>;
}

export default function TabBar({ state, descriptors, navigation }: IBottomTabBarProps) {
  const tabBarIcons: IconKindType[] = ['bell', 'bell'];

  return (
    <View style={styles.container}>
      {state.routes.slice(0, tabBarIcons.length).map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined && typeof options.tabBarLabel === 'string'
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.eachTab}
            key={label}
          >
            <IconBase
              icon={tabBarIcons[index]}
              color={isFocused ? ColorCodes.blue : ColorCodes.black}
            />
            <Text style={{ color: isFocused ? ColorCodes.blue : ColorCodes.black }}>{label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 40,
    paddingHorizontal: 40,
  },
  eachTab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
