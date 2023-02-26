import { useState, useLayoutEffect, useEffect } from 'react';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  View,
  StyleSheet,
  Keyboard,
} from 'react-native';
import { withTheme, TextField, Button } from 'react-native-ios-kit';
import useNoteQuery from '../../hooks/useNoteQuery';
import { useHeaderHeight } from '@react-navigation/elements';
import { Colors } from 'react-native-ios-kit';
import NoteTextField from './NoteTextField';

const AddNote = ({ theme, route, navigation }) => {
  const height = useHeaderHeight();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState();
  const { createNote, note, getNote, updateNote, deleteNote } = useNoteQuery();

  useEffect(() => {
    const noteId = route.params?.noteId;
    // console.log('NOTE ID::', noteId);
    if (noteId) {
      getNote(noteId);
    }
  }, [route.params]);

  useEffect(() => {
    if (note) {
      setTitle(note?.title);
      setBody(note?.body);
    }
  }, [note]);

  useLayoutEffect(() => {
    const onPress = async () => {
      if (!note?.id) {
        await createNote({ title, body });
      } else {
        await updateNote(note?.id, { title, body });
      }
      navigation?.goBack();
    };
    navigation.setOptions({
      headerRight: () => <Button onPress={onPress}>Save</Button>,

    });
  }, [navigation, title, body, createNote, note]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={height}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={[styles.inputContainer]}>
            <NoteTextField
              placeholder={'Note Title'}
              value={title}
              onValueChange={setTitle}
              inputStyle={styles.titleStyle}
            />
            <NoteTextField
              placeholder={'Start Typing'}
              value={body}
              onValueChange={setBody}
              multiline={true}
              inputStyle={styles.bodyStyle}
            />
          </View>
          {note?.id && (
            <View style={styles.btnContainer}>
              <Button
                rounded
                onPress={async () => {
                  await deleteNote(note?.id);
                  navigation?.goBack();
                }}>
                Delete Note
              </Button>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

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
export default withTheme(AddNote);
