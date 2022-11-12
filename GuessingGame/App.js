import { StatusBar } from 'expo-status-bar';
import { ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient'
import styles from './styles'

export default function App() {
  return (
    <>
      <LinearGradient
        colors={['#35061e', '#ddb52f']}
        style={styles.rootScreen}>
        <ImageBackground
          source={require('./assets/robert-coelho-laNNTAth9vs-unsplash.jpg')}
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <StatusBar />
          <StartGameScreen />
        </ImageBackground>
      </LinearGradient>
    </>
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
