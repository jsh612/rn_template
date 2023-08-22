import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from 'navigation/RootStack.navigation';
import { Pressable, Text, View } from 'react-native';
export default function Test3Screen() {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <View>
      <Text>테스트3</Text>
      <Text>테스트3</Text>
      <Text>테스트3</Text>
      <Text>테스트3</Text>
      <Text>테스트3</Text>
      <Text>테스트3</Text>
      <Text>테스트3</Text>
      <Text>테스트3</Text>
      <Text>테스트3</Text>
      <Pressable onPress={() => navigation.navigate('BottomTab', { screen: 'Test2' })}>
        <Text>버튼!!!!!</Text>
      </Pressable>
    </View>
  );
}
