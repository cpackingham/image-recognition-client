import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';


export default function ButtonContainer ({firstButtonOnClick, secondButtonOnClick}) {
  return (
    <View style={styles.buttonContainer}>
      <Button color='#224de3'	title={'I\'m his buddo!'} style={styles.button} onPress={firstButtonOnClick}/>
      <Spacer />
      <Button color='#224de3' title={'I\'m a button'} style={styles.button} onPress={secondButtonOnClick}/>
    </View>
  );
}

const Spacer = () => <Text>    </Text>;

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    padding: 10,
    margin: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});