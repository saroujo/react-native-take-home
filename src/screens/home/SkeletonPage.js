
import React from 'react';
import SkeletonComponent from '../../components/notes-card/SkeletonCard';
import { View } from 'react-native';

class SkeletonPage extends React.PureComponent {
    render() {
        return (<>
            {
                [...Array(5)].map((_, index) => (<View key={index} style={{ paddingBottom: 20 }}>
                    <SkeletonComponent />
                </View>))
            }
        </>)
    }
}
export default SkeletonPage;