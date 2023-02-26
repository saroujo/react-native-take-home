import { Colors, DefaultTheme } from 'react-native-ios-kit';
import { DefaultTheme as NavigationTheme } from '@react-navigation/native';

// theme on components
const theme = {
  ...DefaultTheme,
  dividerColor: Colors.white,
};

// react navigation theme
const navTheme = {
  ...NavigationTheme,
  colors: {
    ...NavigationTheme.colors,
    background: Colors.white,

  },
};

export default { theme, navTheme };
