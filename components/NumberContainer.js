import React from "react"; 
import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
import Colors from '../constants/colors';
import fontSizes from "../constants/fontSizes";

const NumberContainer = (props)=> {
    return(
        <View style={styles.container}>
            <Text style={styles.number}>
                {props.children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 80,
        borderWidth: 2,
        borderColor: Colors.accent,
        padding: 10,
        borderRadius: '50%',
        marginVertical: 20,
        alignItems: "center",
        justifyContent: 'center'
    },
    number: {
        color: Colors.accent,
        fontSize: fontSizes.title,
        fontFamily: 'OpenSansBold'
    }
});

export default NumberContainer;