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
      <View style={{ flex: 1,  justifyContent: 'space-between' }}>
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
    shadowColor : 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    borderColor: "rgba(0, 0, 0, 0.15)",
    borderWidth: StyleSheet.hairlineWidth,
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5, // set the elevation for Android
  },
});

export default NotesCard;
