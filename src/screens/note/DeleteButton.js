import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';
import { Button } from 'react-native-ios-kit';
import { buttonInvertedTextColor, buttonLightColor } from '../../styles/themes';
import styles from './styles';

const DeleteButton = ({ onPress }) => {
  const theme = useTheme();
  return (
    <View style={styles.btnContainer}>
      <Button
        rounded
        inverted
        theme={{
          ...theme,
          primaryColor: buttonLightColor,
        }}
        color={buttonInvertedTextColor}
        onPress={onPress}
      >
        Delete Note
      </Button>
    </View>
  );
};

export default DeleteButton;
