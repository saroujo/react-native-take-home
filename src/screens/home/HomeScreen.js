import { withTheme } from 'react-native-ios-kit';
import { View, FlatList } from 'react-native';
import useNotesQuery from '../../hooks/useNotesQuery';
import FloatingButton from '../../components/floating-button';
import { Screens } from '../../navigation/constants';
import { useEffect } from 'react';
import ListHeader from './ListHeader';
import styles from './styles';
import EmptyComponent from './EmptyComponent';
import RenderItem from './RenderItem';

const HomeScreen = ({ theme, route, navigation }) => {
  const { notesListLoading, notesList, queryNotes } = useNotesQuery();
  // Example to push a new screen
  // console.log('notesList::', notesList);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      queryNotes();
      // queryNotes();
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
        ListHeaderComponent={<ListHeader />}
        ListEmptyComponent={
          <EmptyComponent />
        }
        data={notesList}
        onRefresh={queryNotes}
        refreshing={notesListLoading}
        renderItem={({ item }) => <RenderItem item={item} />}
      />
      < FloatingButton onPress={onButtonPress} label={'Add Note'} />
    </View >
  );
};

export default withTheme(HomeScreen);
