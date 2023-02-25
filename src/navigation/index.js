import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './../screens/HomeScreen';
import ExampleScreen from './../screens/ExampleScreen';
import AddNote from './../screens/AddNote';
import { Screens } from './constants';

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
        component={AddNote}
        options={{
          title: '',
          headerBackVisible: true,
          // headerBackTitleVisible: false,
          headerBackTitle: 'Home',
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
