import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import styles from './styles';
import Colors from './constants/colors'

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
    setGameIsOver(false);
  };
  const gameIsOverHandler = () => setGameIsOver(true);

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameIsOverHandler} />
  }
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />
  }


  return (
    <LinearGradient
      colors={[Colors.primary600, Colors.primary100]}
      style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/robert-coelho-laNNTAth9vs-unsplash.jpg')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          <StatusBar />
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
