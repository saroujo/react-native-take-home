import { TextField } from 'react-native-ios-kit';

/* eslint-disable react/jsx-props-no-spreading */
const NoteTextField = ({ placeholder, value, onValueChange, inputStyle, multiline, ...rest }) => {
    return (<TextField
        placeholder={placeholder}
        value={value}
        onValueChange={onValueChange}
        clearButton={false}
        inputStyle={inputStyle}
        multiline={multiline}
        {...rest}
    />)
};

export default NoteTextField;