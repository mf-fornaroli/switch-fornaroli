
import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import FontSizes from '../constants/fontSizes';
const Input = (props) => {
    return (
        <TextInput style={styles.input} {...props} />
    );
};

const styles = StyleSheet.create({
    input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    fontSize:  FontSizes.caption
    }
});

export default Input;