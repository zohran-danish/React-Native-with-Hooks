import React, { useState } from 'react'
import { Text,View, Button, StyleSheet } from 'react-native';

const CounterScreen = () => {
  
  const [counter, setCounter] = useState(0);

    return (
      <View>
        <Button title="Increment" onPress={()=>setCounter(counter+1)} />
        <Button title="Decrement" onPress={()=>setCounter(counter-1)} />
        <Text>Current Count : {counter}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
})


export default CounterScreen;