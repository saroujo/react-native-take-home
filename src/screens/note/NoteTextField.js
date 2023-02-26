import { TextField } from 'react-native-ios-kit';
import { Colors } from 'react-native-ios-kit';

const NoteTextField = ({ placeholder, value, onValueChange, inputStyle, multiline, ...rest }) => {
    return (<TextField
        placeholder={placeholder}
        value={value}
        onValueChange={onValueChange}
        clearButton={false}
        theme={{
            dividerColor: Colors.white
        }}
        inputStyle={inputStyle}
        multiline={multiline}
        {...rest}
    />)
};

export default NoteTextField;