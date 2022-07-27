//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';
import Routes from './src/navigation/Routes';
import actions from './src/redux/actions';
import store from './src/redux/store';
import { getItem, getLogin, setLogin } from './src/utils/utils';
// create a component
const App = () => {
  useEffect(() => {
    getLogin().then((res) => {
      console.log(res, "resssss")
      actions.loginData(res)
    })


    getItem('intro').then((res) => {
      console.log(res, "getItem>>>res")
      if (res == null) {
        actions.Intro(true)

      } else {
        actions.Intro(res)
      }

    });

  }, [])

  return (

    <Provider store={store}>
      <FlashMessage
        duration={2000}
        position="top" />
      <Routes />
    </Provider>

  );
};

export default App;
