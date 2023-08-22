import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from 'navigation/RootStack.navigation';
import { Pressable, Text, View } from 'react-native';
export default function Test2Screen() {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <View>
      <Text>테스트2</Text>
      <Text>테스트2</Text>
      <Text>테스트2</Text>
      <Text>테스트2</Text>
      <Text>테스트2</Text>
      <Text>테스트2</Text>
      <Text>테스트2</Text>
      <Text>테스트2</Text>
      <Text>테스트2</Text>
      <Pressable
        onPress={() => {
          console.log('여기다!!!!!!!');
          navigation.navigate('BottomTab', { screen: 'Test3' });
        }}
      >
        <Text>버튼3으로!!!!!</Text>
      </Pressable>
    </View>
  );
}
