import { View, Pressable } from 'react-native';
import { Headline, Body, Footnote } from 'react-native-ios-kit';

const NotesCard = ({ note, style, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          borderRadius: 10,
          borderWidth: 1,
          height: 130,
        },
        style,
      ]}>
      <View style={{ flex: 1, padding: 14, justifyContent: 'space-between' }}>
        <Headline>{note?.title}</Headline>
        <Body>{note?.body}</Body>
        <Footnote>{note?.date}</Footnote>
      </View>
    </Pressable>
  );
};

export default NotesCard;
