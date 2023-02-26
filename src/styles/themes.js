import { Colors, DefaultTheme } from 'react-native-ios-kit';
import { DefaultTheme as NavigationTheme } from '@react-navigation/native';

const theme = {
  ...DefaultTheme,
  dividerColor: Colors.white,
};
const navTheme = {
  ...NavigationTheme,
  colors: {
    ...NavigationTheme.colors,
    background: Colors.white,

  },
};

export default { theme, navTheme };
