import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { useWindowDimensions, View } from 'react-native';
import styles from './styles';

const SkeletonComponent = ({ style }) => {
    const { width } = useWindowDimensions();
    return (
        <View
            style={[
                styles.card,
                style,
            ]}>
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <SkeletonPlaceholder>
                    <SkeletonPlaceholder.Item width={width * 0.5} height={20} />
                    <SkeletonPlaceholder.Item marginTop={6} width={width * 0.75} height={20} />
                </SkeletonPlaceholder>
                <SkeletonPlaceholder>
                    <SkeletonPlaceholder.Item marginTop={6} width={width * 0.25} height={20} />
                </SkeletonPlaceholder>
            </View>
        </View>
    );
}
export default SkeletonComponent;