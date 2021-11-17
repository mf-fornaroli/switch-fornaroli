import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [loadedFonts] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf')
  })

  
  const [userNumber, setUserNumber] = useState();

  const handlerStartGame = selectedNumber => {
    setUserNumber(selectedNumber);
  }

  if (!loadedFonts) {
    return <AppLoading />
  }

  let content = <StartGameScreen onStartGame={handlerStartGame}/>

  if (userNumber){
    content = <GameScreen />
  }
  
  return (
    <View style={styles.container}>
      <Header title={'Adivina el Número'}/>
     {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
