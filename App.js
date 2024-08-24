import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState(1);
  const [message, setMessage] = useState('Guess a number between 1 and 100')

  const handleGuess = () => {
    const guessNumber = parseInt(guess);
    setAttempts(attempts + 1);
  
      if (guessNumber === targetNumber) {
          Alert.alert(
            'Congratulations!', 
            `You guessed the number in ${attempts} guesses`,
            [
              {
                text: 'New Game',
                onPress: () => startNewGame(),
              },
            ],
            )
      }else if (guessNumber < targetNumber) {
        setMessage(`Your guess ${guess} is too low`)
      }else {
        setMessage(`Your guess ${guess} is too high`)
      }
      setGuess('');
  };

  const startNewGame = () => {
    setGuess('');
    setAttempts(1);
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setMessage('Guess a number between 1 and 100');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.messageText}>{message}</Text>
      <TextInput 
        style={styles.input}
        keyboardType='numeric'
        value = {guess} 
        onChangeText={guess => setGuess(guess)}/>
      <Button title ="MAKE GUESS" onPress={handleGuess}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageText: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
});
