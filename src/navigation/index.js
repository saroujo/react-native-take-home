import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import ExampleScreen from '../screens/ExampleScreen';
import NoteScreen from '../screens/note';
import Screens from './constants';
import { HeaderBackButton } from '@react-navigation/elements';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.HOME}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Screens.ADDNOTE}
        component={NoteScreen}
        options={({ navigation }) => {
          return {
            title: '',
            headerLeft: () => <HeaderBackButton labelVisible label='Home' onPress={() => navigation?.goBack()} />
          }
        }}
      />
      <Stack.Screen
        name="example"
        component={ExampleScreen}
        options={{
          title: 'Example Screen',
        }}
      />
    </Stack.Navigator>
  );
};

export default NavigationStack;
