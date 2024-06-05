import React, { createContext, useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  useColorScheme,
  TextInput,
  Button,
  View,
  Platform,
  ImageBackground,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { getRiddle } from './api';
import Card from './components/Card';
import Riddle from './components/Riddle';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [riddle, setRiddle] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    const getRiddlePayload = async () => {
      const newRiddle = await getRiddle();
      console.log(newRiddle)
      setRiddle(newRiddle.riddle);
      setAnswer(newRiddle.answer);
    };
    getRiddlePayload();
  }, [])


  return (
    <SafeAreaView style={backgroundStyle}>
      <ImageBackground source={require('./assets/_bdde2e4b-1334-461b-ae15-afd406708730.jpeg')}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.box}>
          <Text
            style={styles.h1}
          >
            Riddle me this :)
          </Text>

          <Riddle
            text={riddle}
          />
          <Text
            style={styles.center}
          >{answer}</Text>
        </View>

      </ImageBackground>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  center: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 16,
    color: "white",
  },
  h1: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    fontSize: 42,
    color: 'white',
  },
  box: {
    gap: 20
  },
  backgroundImage: {
    width: '100%', // Specify the width
    height: '100%', // Specify the height
  },
});

export default App;
function createConnection() {
  throw new Error('Function not implemented.');
}

