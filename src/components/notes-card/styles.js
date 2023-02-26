import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 16,
        borderColor: "rgba(0, 0, 0, 0.15)",
        borderWidth: StyleSheet.hairlineWidth,
        elevation: 2, // set the elevation for Android
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.1
    },
});

export default styles;