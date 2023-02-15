import { View } from 'react-native';
import {
  Title1,
  Title2,
  Title3,
  Headline,
  Body,
  Callout,
  Subhead,
  Footnote,
  Caption1,
  Caption2,
  withTheme,
} from 'react-native-ios-kit';

const ExampleScreen = ({ theme, route, navigation }) => {
  return (
    <View>
      <Title1>Title 1</Title1>
      <Title2>Title2</Title2>
      <Title3>Title3</Title3>
      <Headline>Headline</Headline>
      <Body>Body</Body>
      <Callout>Callout</Callout>
      <Subhead>Subhead</Subhead>
      <Footnote>Footnote</Footnote>
      <Caption1>Caption1</Caption1>
      <Caption2>Caption2</Caption2>
    </View>
  );
};

export default withTheme(ExampleScreen);
