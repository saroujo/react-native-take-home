import { View, Pressable } from 'react-native';
import { Headline, Subhead, Caption1 } from 'react-native-ios-kit';
import styles from './styles';

const NotesCard = ({ note, style, onPress }) => {
  return (
    <Pressable onPress={onPress} style={[styles.card, style]}>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <Headline numberOfLines={1}>{note?.title}</Headline>
        <Subhead numberOfLines={2}>{note?.body}</Subhead>
        <Caption1>{note?.date}</Caption1>
      </View>
    </Pressable>
  );
};

export default NotesCard;
