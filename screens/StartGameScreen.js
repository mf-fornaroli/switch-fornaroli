import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ViewComponent, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import FontSizes from '../constants/fontSizes';


const StartGameScreen = (props) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed,  setConfirmed] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');

    const handlerInputNumber = text => {
        setEnteredValue(text.replace(/[^0-9]/g, ''));
    };

    const handlerResetInput = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const handlerConfirmInput = ()=>{
        if((enteredValue===NaN) || (enteredValue < 0) || (enteredValue > 99)|| (enteredValue ==='')) return
            setSelectedValue(enteredValue);
            setConfirmed(true);
            setEnteredValue('');
        }

    //const confirmedOutput = confirmed ? <Text>Número Elegido: {selectedValue}</Text> : null;
    let confirmedOutput;
    if(confirmed){
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text style={styles.cardTitle}>Tu selección</Text>
                   <NumberContainer>{selectedValue}</NumberContainer>
                <Button title={'Comenzar Juego!!'} onPress ={()=>props.onStartGame(selectedValue)} fontSize={FontSizes.button} color = {Colors.primary}/>
            </Card>
        )
    }
    return (
        /*<TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss()
        }} >*/
        <View style={styles.screen}>
            <Text style={styles.title}>!A jugar!</Text>
            <Card  style={styles.inputContainer}>
                <Text style={styles.cardTitle}> Elige un número </Text>
                <Input
                    blurOnSubmit
                    autoCapitalization="none"
                    autoCorrect={false}
                    keyboardType='numeric'
                    maxLength={2}
                    value = {enteredValue}
                    onChangeText = {handlerInputNumber}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Limpiar" onPress={handlerResetInput} color={Colors.accentLight} fontSize={FontSizes.button}/>
                    </View>
                    <View style={styles.button}>
                     <Button title="Confirmar" onPress={handlerConfirmInput} color = {Colors.primary} fontSize={FontSizes.button}/>
                    </View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
       /* </TouchableWithoutFeedback> 
       */
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: FontSizes.title,
        marginVertical: 24,
        textAlign: 'center',
        fontFamily: 'OpenSans'
    },
    cardTitle: {
        fontSize: FontSizes.subTitle,
        marginVertical: 16,
        textAlign: 'center',
        fontFamily: 'OpenSansBold'
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        padding: 10,
        alignItems: 'center',
        backgroundColor: "white"
     },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginVertical: 16
    },
    button: {
        width: 100
    },
    summaryContainer: {
        width: 180,
        maxWidth: '50%',
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        marginVertical: 10
    }
});

export default StartGameScreen;