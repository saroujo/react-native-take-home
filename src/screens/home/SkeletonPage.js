
import React from 'react';
import { View } from 'react-native';
import SkeletonComponent from '../../components/notes-card/SkeletonCard';
import styles from './styles';

class SkeletonPage extends React.PureComponent {
    render() {
        return (<>
            {
                ['c1', 'c2', 'c3'].map((val) => (<View key={val} style={styles.skeleton}>
                    <SkeletonComponent />
                </View>))
            }
        </>)
    }
}
export default SkeletonPage;