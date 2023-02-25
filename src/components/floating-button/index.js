import { Title1, withTheme, Button } from 'react-native-ios-kit';
import { View, StyleSheet, FlatList } from 'react-native';

const FloatingButton = ({ onPress, label }) => {
  return (
    <Button rounded inline onPress={onPress} style={styles.button} inverted>
      {label}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: 30,
    marginBottom: 30,
  },
});

export default FloatingButton;
