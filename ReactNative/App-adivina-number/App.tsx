import React, { useEffect, useState } from 'react';
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
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { getJokes } from './api';
import Card from './components/Card';
import MyButton from './components/MyButton';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [pcText, setpcText] = useState("I'm going to try to guess your number, please tell me if it's greater or less than:");
  const [L, setL] = useState(0);
  const [R, setR] = useState(101);

  let numberGuess = Math.floor((L + R) / 2)

  if (L === 0 && R === 101) {
    numberGuess = Math.floor(Math.random() * 100)
  }

  return (
    <View style={styles.content}>
      <Text style={styles.text_content}>{pcText}</Text>
      <View style={styles.box_container}>
        <View style={styles.button}>
          <Button
            onPress={clickBigger}
            title={"Bigger"}
            color={"lightgreen"}
          /></View>
        <Text style={styles.text_content} > {'>'} {numberGuess} {'>'}</Text>
        <View style={styles.button}>
          <Button
            onPress={clickSmaller}
            title={"Smaller"}
            color={"lightpink"}
          /></View>
      </View>
      <View style={styles.buttonGuess}>
        <Button
          onPress={clickCorrect}
          title={"Same Number"}
          color={"blue"}
        /></View>
    </View >
  )
  function clickBigger() {
    setL(numberGuess);
    console.log("R", R);
    console.log("L", L);
  }
  function clickSmaller() {
    setR(numberGuess);
    console.log("R", R);
    console.log("L", L);
  }
  function clickCorrect() {
    setpcText(`Your number is ${numberGuess}`);
  }
}

const styles = StyleSheet.create({
  h1: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    fontSize: 32,
  },
  text_content: {
    textAlign: 'center',
    fontSize: 24,
    // flex: 1
  },
  box_container: {
    flexDirection: 'row',
    // backgroundColor: 'blue',
    // flex: 1
  },
  content: {
    // backgroundColor: Platform.OS === 'ios' ? 'wheat' : 'coral',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // alignContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    backgroundColor: 'blue',
  },
  buttonGuess: {
    width:"100%",
    height: "30%"
  },
});

export default App;
