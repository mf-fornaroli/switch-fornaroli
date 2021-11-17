
import  React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import FontSizes from '../constants/fontSizes';
import Colors from '../constants/colors';



const GameScreen = (props) => {
    const generateRandomBetween = (min, max, exclude) => { 
        min = Math.ceil(min);
        max = Math.floor(max);
        const randomNumber = Math.floor(Math.random()*(max-min)+min);
        if(randomNumber===exclude){
            return generateRandomBetween = (min, max, exclude);
        } else  {
            return randomNumber;
        }
    
    };
    
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userOption));

    

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>La suposición del oponente</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="MENOR"  onPress={()=>{}} fontSize={FontSizes.button} color = {Colors.primary}/>
                <Button title="MAYOR"  onPress={()=>{}} fontSize={FontSizes.button} color = {Colors.primary}/>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection:'row',
        justifyContent: 'space-around',
        marginToop: 20,
        width: 300,
        maxWidth: '80%',
        paddingVertical: 20
    },
    title: {
        fontSize: FontSizes.title,
        marginVertical: 24,
        textAlign: 'center',
        fontFamily: 'OpenSansBold'
    }

})
export default GameScreen;