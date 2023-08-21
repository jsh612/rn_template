import {
  NavigationContainer,
  NavigatorScreenParams,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator, { BottomTabParamList } from 'navigation/BottomTap.navigation';
type RootStackParamList = {
  BottomTab?: NavigatorScreenParams<BottomTabParamList>;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigation() {
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Screen name="BottomTab" component={BottomTabNavigator} />
    </NavigationContainer>
  );
}
