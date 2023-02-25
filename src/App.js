import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-ios-kit';
import {theme, navTheme} from './styles/themes';
import NavigationStack from './navigation';

const App = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <ThemeProvider theme={theme}>
        <NavigationStack />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
