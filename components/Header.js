// @flow 
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from  '../constants/colors';
import FontSizes from '../constants/fontSizes';

const Header = (props) => {

    const {title} = props;
    return (
    <View style={styles.header}>  
        <LinearGradient
           colors={['#005b7e','#00293d']}
            start={{x: 0, y: 0}}
            end={{x:1, y:1}}
            style={styles.gradientBox}
        >
            <Text style={styles.headerTitle}>{title}</Text>
        </LinearGradient>
    </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: 'white',
        fontSize: FontSizes.header,
        fontFamily: 'OpenSansBold'
    },
    gradientBox: {
        width:'100%',
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Header;