import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      // borderWidth: 0,
    },
    inner: {
      flex: 1,
      justifyContent: 'space-between',
    },
    inputContainer: {
      padding: 18,
    },
    btnContainer: {
      alignSelf: 'flex-end',
      padding: 20,
    },
    titleStyle: {
      fontSize: 22,
      leading: 28,
      tracking: 16,
      fontWeight: '400',
    },
    bodyStyle: {
      fontSize: 15,
      leading: 20,
      tracking: -16,
      fontWeight: '400',
    }
  
  });

  export default styles;