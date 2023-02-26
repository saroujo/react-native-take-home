import { StyleSheet, View, Pressable } from 'react-native';
import { Headline, Body, Footnote } from 'react-native-ios-kit';

const NotesCard = ({ note, style, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.card,
        style,
      ]}>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <Headline>{note?.title}</Headline>
        <Body>{note?.body}</Body>
        <Footnote>{note?.date}</Footnote>
      </View>
    </Pressable>
  );
};

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

export default NotesCard;
