import { useTheme } from '@react-navigation/native';
import {
    View,
} from 'react-native';
import { Button } from 'react-native-ios-kit';
import styles from './styles';

const DeleteButton = ({ onPress }) => {
    const theme = useTheme();
    return (<View style={styles.btnContainer}>
        <Button
            rounded
            inverted
            theme={{
                ...theme,
                primaryColor: 'rgba(10, 132, 255, 0.15)'
            }}
            style={{ textColor: '0A84FF' }}
            color='rgb(10, 132, 255)'
            onPress={onPress}>
            Delete Note
        </Button>
    </View>);
}

export default DeleteButton;