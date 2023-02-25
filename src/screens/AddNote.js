import { useState, useLayoutEffect, useEffect } from 'react';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  View,
  StyleSheet,
  Keyboard,
} from 'react-native';
import { withTheme, TextField, Button } from 'react-native-ios-kit';
import useNoteQuery from '../hooks/useNoteQuery';
import { useHeaderHeight } from '@react-navigation/elements';

const AddNote = ({ theme, route, navigation }) => {
  const height = useHeaderHeight();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState();
  const { createNote, note, getNote, updateNote, deleteNote } = useNoteQuery();
  // console.log('NOTE::', note);

  useEffect(() => {
    const noteId = route.params?.noteId;
    console.log('NOTE ID::', noteId);
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
            <TextField
              placeholder={'Note Title'}
              value={title}
              onValueChange={setTitle}
            />
            <TextField
              placeholder={'Start Typing'}
              value={body}
              onValueChange={setBody}
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
    backgroundColor: "white"
  },
  inner: {
    flex: 1,
    justifyContent: 'space-between',
  },
  inputContainer: {
    padding: 18,
  },
  btnContainer: {
    // flex: 1,
    alignSelf: 'flex-end',
    // backgroundColor: 'white',
    padding: 20,
  },
});
export default withTheme(AddNote);
