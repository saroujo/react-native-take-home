import { Title1, Headline, withTheme } from 'react-native-ios-kit';
import { View, StyleSheet, FlatList } from 'react-native';
import useNotesQuery from '../hooks/useNotesQuery';
import FloatingButton from '../components/floating-button';
import { Screens } from '../navigation/constants';
import NotesCard from '../components/notes-card';
import { useEffect } from 'react';

const HomeScreen = ({ theme, route, navigation }) => {
  const { notesListLoading, notesList, queryNotes } = useNotesQuery();
  // Example to push a new screen
  console.log('notesList::', notesList);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      console.log('Query notes:::');
      queryNotes();
    });
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation, queryNotes]);

  const onButtonPress = () => {
    navigation.push(Screens.ADDNOTE);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Title1 style={styles.title}>Notes</Title1>}
        ListEmptyComponent={
          <Headline>Add a new note using the 'Add Note' button below</Headline>
        }
        data={notesList}
        renderItem={({ item, index, separators }) => {
          const onPress = () => {
            navigation.push(Screens.ADDNOTE, { noteId: item?.id });
          };
          return (
            <NotesCard
              note={item}
              style={{ marginBottom: 18 }}
              onPress={onPress}
            />
          );
        }}
      />
      <FloatingButton onPress={onButtonPress} label={'Add Note'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 44,
    paddingHorizontal: 18,
  },
  header: {
    justifyContent: 'flex-start',
    padding: 18,
    paddingTop: 44,
  },
  body: {
    paddingHorizontal: 16,
  },
  title: {
    fontWeight: 700,
    paddingBottom: 22,
  },
});

export default withTheme(HomeScreen);
