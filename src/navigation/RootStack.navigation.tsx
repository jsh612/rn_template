import {
  NavigationContainer,
  NavigatorScreenParams,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import BottomTabNavigator, { BottomTabParamList } from 'navigation/BottomTap.navigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
type RootStackParamList = {
  BottomTab?: NavigatorScreenParams<BottomTabParamList>;
  HomeScreen?: undefined;
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigation() {
  const navigationRef = useNavigationContainerRef();

  const { top } = useSafeAreaInsets();

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={{ headerShown: false, contentStyle: { paddingTop: top } }}
      >
        <RootStack.Screen name="BottomTab" component={BottomTabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
