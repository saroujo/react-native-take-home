import { Title1 } from 'react-native-ios-kit';
import { View } from 'react-native';
import styles from './styles';
import React from 'react';

class ListHeader extends React.PureComponent {
    render() {
        return (<View ><Title1 style={styles.title}>Notes</Title1></View>);
    }
}

export default ListHeader;