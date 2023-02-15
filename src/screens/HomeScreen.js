import { Title1, withTheme, Button } from 'react-native-ios-kit';
import { View, StyleSheet } from 'react-native';
import useNotesQuery from '../hooks/useNotesQuery';

const HomeScreen = ({ theme, route, navigation }) => {
  const { notesListLoading, notesList } = useNotesQuery();

  // Example to push a new screen
  const onButtonPress = () => {
    navigation.push('example');
  };

  return (
    <View style={styles.container}>
      <Title1 style={styles.title}>Hello world</Title1>
      <Button rounded inline onPress={onButtonPress}>
        This is a button
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 700,
    paddingBottom: 22,
  },
});

export default withTheme(HomeScreen);
