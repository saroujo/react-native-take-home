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
    fontWeight: '400',
  },
  bodyStyle: {
    fontSize: 15,
    fontWeight: '400',
  }

});

export default styles;