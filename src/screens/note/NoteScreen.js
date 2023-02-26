import { useState, useLayoutEffect, useEffect, useCallback } from 'react';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  View,
  Keyboard,
} from 'react-native';
import { withTheme, Spinner, Button } from 'react-native-ios-kit';
import useNoteQuery from '../../hooks/useNoteQuery';
import { useHeaderHeight } from '@react-navigation/elements';
import NoteTextField from './NoteTextField';
import styles from './styles';
import DeleteButton from './DeleteButton';

const AddNote = ({ theme, route, navigation }) => {
  const height = useHeaderHeight();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState();
  const { createNote, note, getNote, updateNote, deleteNote, inFlight } = useNoteQuery();

  useEffect(() => {
    const noteId = route.params?.noteId;
    // console.log('NOTE ID::', noteId);
    if (noteId) {
      console.log('getNote:::');
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
        // pass only parameters which have changed
        const request = {};
        if (note?.title != title) {
          request.title = title;
        }
        if (note?.body != body) {
          request.body = body;
        }
        // Sending both variables because of bug on API 
        await updateNote(note?.id, { title, body });
      }
      navigation?.goBack();
    };
    const enabled = note?.title != title || note?.body != body;
    navigation.setOptions({
      headerRight: () => <Button disabled={!enabled} onPress={onPress}>Save</Button>,

    });
  }, [navigation, title, body, createNote, note]);

  const onDelete = useCallback(async () => {
    await deleteNote(note?.id);
    navigation?.goBack();
  }, [deleteNote, navigation]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={height}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={[styles.inputContainer]}>
            {inFlight && <Spinner animating={inFlight} />}
            <NoteTextField
              key="title"
              placeholder={'Note Title'}
              value={title}
              onValueChange={setTitle}
              inputStyle={styles.titleStyle}
            />
            <NoteTextField
              key="body"
              placeholder={'Start Typing'}
              value={body}
              onValueChange={setBody}
              multiline={true}
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
