import { Colors, DefaultTheme } from 'react-native-ios-kit';
import { DefaultTheme as NavigationTheme } from '@react-navigation/native';

const buttonLightColor = 'rgba(10, 132, 255, 0.15)';
const buttonInvertedTextColor = 'rgb(10, 132, 255)';
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

export { theme, navTheme, buttonLightColor, buttonInvertedTextColor };
