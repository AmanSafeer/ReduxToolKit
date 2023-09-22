/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import Store, { useAppDispatch, useAppSelector } from "./src/store"
import { Decrement, Increment } from './src/store/toolkit/middleware';

const Counter = () => {
  const counter = useAppSelector((state) => state.counterReducer.value)
  const dispatch = useAppDispatch()
  return (
    <>
      <Text style={{ textAlign: "center", fontSize: 100 }}>{counter}</Text>

      <Button onPress={() => dispatch(Increment({ value: 5 }))} title='INCREMENT' />
      <Button onPress={() => dispatch(Decrement({ value: 5 }))} title='DECREMENT' />
    </>
  )
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={Store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Counter />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
