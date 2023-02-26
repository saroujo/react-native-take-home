import { useNavigation } from '@react-navigation/native';
import { NotesCard } from '../../components/notes-card';
import Screens from '../../navigation/constants';

const RenderItem = ({ item }) => {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.push(Screens.ADDNOTE, { noteId: item?.id, refresh: false });
    };
    return (
        <NotesCard
            note={item}
            style={{ marginBottom: 18 }}
            onPress={onPress}
        />
    );
}

export default RenderItem;