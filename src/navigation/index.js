import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderBackButton } from '@react-navigation/elements';
import HomeScreen from '../screens/home';
import ExampleScreen from '../screens/ExampleScreen';
import NoteScreen from '../screens/note';
import Screens from './constants';

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
            headerShadowVisible: false,
            headerLeft: () => (
              <HeaderBackButton
                labelVisible
                label="Home"
                onPress={() => navigation?.goBack()}
              />
            ),
          };
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
