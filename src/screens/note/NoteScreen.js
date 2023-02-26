import { useState, useLayoutEffect, useEffect, useCallback } from 'react';
import {
  Platform,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  View,
  Keyboard,
} from 'react-native';
import { withTheme, Spinner, Button, Callout } from 'react-native-ios-kit';
import { useHeaderHeight } from '@react-navigation/elements';
import NoteTextField from './NoteTextField';
import styles from './styles';
import DeleteButton from './DeleteButton';
import useNoteQuery from '../../hooks/useNoteQuery';

const AddNote = ({ route, navigation }) => {

  const height = useHeaderHeight();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState();
  const { createNote, note, getNote, updateNote, deleteNote, inFlight, error } = useNoteQuery();

  useEffect(() => {
    const noteId = route.params?.noteId;
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
        // Sending both variables because of bug on API 
        // pass only parameters which have changed
        // const request = {};
        // if (note?.title !== title) {
        //  request.title = title;
        // }
        // if (note?.body !== body) {
        //  request.body = body;
        // }
        await updateNote(note?.id, { title, body });
      }
      navigation?.goBack();
    };
    const enabled = note?.title !== title || note?.body !== body;
    navigation.setOptions({
      headerRight: () => <Button disabled={!enabled} onPress={onPress}>Save</Button>,

    });
  }, [navigation, title, body, createNote, note]);

  const onDelete = useCallback(async () => {
    await deleteNote(note?.id);
    navigation?.goBack();
  }, [deleteNote, navigation, note]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={height}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={[styles.inputContainer]}>
            {inFlight && <Spinner animating={inFlight} />}
            {error && <Callout> {error} </Callout>}
            <NoteTextField
              // key="title"
              placeholder='Note Title'
              value={title}
              onValueChange={setTitle}
              inputStyle={styles.titleStyle}
            />
            <NoteTextField
              // key="body"
              placeholder='Start Typing'
              value={body}
              onValueChange={setBody}
              multiline
              inputStyle={styles.bodyStyle}
            />
          </View>
          {note?.id && (
            <DeleteButton onPress={onDelete} />
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default withTheme(AddNote);
