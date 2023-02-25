import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-ios-kit';
import theme from './styles/themes';
import NavigationStack from './navigation';

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <ThemeProvider theme={theme}>
        <NavigationStack />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
