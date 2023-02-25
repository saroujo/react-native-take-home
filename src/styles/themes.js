import { DefaultTheme } from 'react-native-ios-kit';
import { DefaultTheme as NavigationTheme } from '@react-navigation/native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};
const navTheme = {
  ...NavigationTheme,
  colors: {
    ...NavigationTheme.colors,
    background: "rgb(245,245,245)",
    border:"rgb(245,245,245)"
    // background: "red",
    // primary: 'rgb(255, 45, 85)',
  },
};

export default {theme, navTheme};
